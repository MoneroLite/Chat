import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { Layout } from "../../components/layout/Layout";
import { SubmitButton } from "../../components/ui/buttons/main/SubmitButton";
import { BasicInput } from "../../components/ui/inputs/main/BasicInput";

const socket = io("http://localhost:5000");

const Chat: FC = () => {
  const nav = useNavigate();
  const { search } = useLocation();

  const [params, setParams] = useState<null | {}>(null);
  const [messages, setMessages] = useState<any>([]);

  const [roomUsers, setUsersRoom] = useState();

  const [msg, setMsg] = useState("");
  const onSendMessage = (e) => {
    e.preventDefault();

    if (!msg) return;

    socket.emit("sendMessage", { message: msg, params });
    setMsg("");
  };

  const onLeftRoom = (e) => {
    e.preventDefault();
    nav("/");

    socket.emit("leftRoom", { params });
  };

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

  useEffect(() => {
    socket.on("joinRoom", ({ data: { users } }) => {
      setUsersRoom(users.length);
    });
  }, []);

  console.log(roomUsers);

  console.log(messages);

  return (
    <Layout>
      <BasicInput value={msg} onChange={(e) => setMsg(e.target.value)} />
      <SubmitButton onClick={(e) => onSendMessage(e)}>Отправить</SubmitButton>
      <SubmitButton onClick={(e) => onLeftRoom(e)}>выйти</SubmitButton>
    </Layout>
  );
};

export default Chat;
