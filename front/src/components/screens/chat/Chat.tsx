import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import styles from "./chat.module.scss";
import { ChatFooter } from "./footer/ChatFooter";
import { ChatHeader } from "./header/ChatHeader";
import { Messages } from "./messages/Messages";

export const Chat: FC = () => {
  const socket = io("http://localhost:5000");
  const { search } = useLocation();
  const [params, setParams] = useState<null | {}>(null);

  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);
    socket.emit("join", searchParams);
  }, [search]);
  return (
    <div className={styles.container}>
      <ChatHeader socket={socket} params={params} />
      <Messages socket={socket} params={params} />
      <ChatFooter socket={socket} params={params} />
    </div>
  );
};
