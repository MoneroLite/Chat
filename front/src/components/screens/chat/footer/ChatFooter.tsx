import React, { useState } from "react";
import { SubmitButton } from "../../../ui/buttons/main/SubmitButton";
import { BasicInput } from "../../../ui/inputs/main/BasicInput";
import styles from "./chatFooter.module.scss";

export const ChatFooter = ({ socket, params }: any) => {
  const [msg, setMsg] = useState("");

  const onSendMessage = (e) => {
    e.preventDefault();

    if (!msg) return;

    socket.emit("sendMessage", { message: msg, params });
    setMsg("");
  };
  return (
    <div>
      <BasicInput value={msg} onChange={(e) => setMsg(e.target.value)} />
      <SubmitButton onClick={onSendMessage}>Отправить</SubmitButton>
    </div>
  );
};
