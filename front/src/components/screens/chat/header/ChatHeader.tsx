import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../../../ui/buttons/main/SubmitButton";
import styles from "./chatHeader.module.scss";

export const ChatHeader = ({ socket, params }: any) => {
  const nav = useNavigate();
  const [roomUsers, setUsersRoom] = useState();

  const onLeftRoom = (e) => {
    e.preventDefault();
    nav("/");
    socket.emit("leftRoom", { params });
  };

  useEffect(() => {
    socket.on("joinRoom", ({ data: { users } }) => {
      setUsersRoom(users.length);
    });
  }, []);

  return (
    <div>
      {/* <span>{params.room}</span> */}
      <span>Пользователей: {roomUsers}</span>
      <SubmitButton onClick={onLeftRoom}>выйти</SubmitButton>
    </div>
  );
};
