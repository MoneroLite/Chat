import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../../../ui/buttons/main/SubmitButton";
import styles from "./chatHeader.module.scss";

export const ChatHeader = ({ socket, params }: any) => {
  const nav = useNavigate();
  const [roomUsers, setUsersRoom] = useState();

  const onLeaveRoom = (e) => {
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
    <div className={styles.wrap}>
      <span className={styles.nameRoom}>{params ? params.room : ""}</span>
      <span className={styles.countUsers}>Пользователей: {roomUsers}</span>
      <SubmitButton className={styles.btnLeave} onClick={onLeaveRoom}>
        выйти
      </SubmitButton>
    </div>
  );
};
