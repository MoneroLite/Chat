import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { Layout } from "../../components/layout/Layout";
import { Chat } from "../../components/screens/chat/Chat";
import { SubmitButton } from "../../components/ui/buttons/main/SubmitButton";
import { BasicInput } from "../../components/ui/inputs/main/BasicInput";

const socket = io("http://localhost:5000");

const Room: FC = () => {
  const nav = useNavigate();
  const { search } = useLocation();

  const [params, setParams] = useState<null | {}>(null);
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);
    socket.emit("join", searchParams);
  }, [search]);

  useEffect(() => {
    socket.on("message", ({ data }) => {
      setMessages((_messages) => [..._messages, data]);
    });
  }, []);

  console.log(messages);

  return (
    <Layout>
      <Chat />
    </Layout>
  );
};

export default Room;
