import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import { Layout } from "../../components/layout/Layout";

const socket = io("http://localhost:5000");

const Chat: FC = () => {
  const { search } = useLocation();
  const [params, setParams] = useState<null | {}>(null);
  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);

    socket.emit("join", searchParams);
  }, [search]);

  return <Layout>Chat</Layout>;
};

export default Chat;
