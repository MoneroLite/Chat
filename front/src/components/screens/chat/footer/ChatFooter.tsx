import EmojiPicker, { Theme } from "emoji-picker-react";
import React, { useState } from "react";
import { SubmitButton } from "../../../ui/buttons/main/SubmitButton";
import { BasicInput } from "../../../ui/inputs/main/BasicInput";
import styles from "./chatFooter.module.scss";
import icon from "../../../../assets/icons/emoji.svg";

export const ChatFooter = ({ socket, params }: any) => {
  const [msg, setMsg] = useState("");
  const [isOpen, setOpen] = useState(false);

  const onSendMessage = (e) => {
    e.preventDefault();

    if (!msg) return;

    socket.emit("sendMessage", { message: msg, params });
    setMsg("");
  };

  const onEmojiClick = ({ emoji }) => setMsg(`${msg} ${emoji}`);
  return (
    <div className={styles.wrap}>
      <BasicInput
        className={styles.input}
        value={msg}
        placeholder="Введите сообщение"
        onChange={(e) => setMsg(e.target.value)}
      />

      <div className={styles.emoji}>
        <img src={icon} alt="" onClick={() => setOpen(!isOpen)} />

        {isOpen && (
          <div className={styles.emojies}>
            <EmojiPicker theme={Theme.DARK} onEmojiClick={onEmojiClick} />
          </div>
        )}
      </div>

      <SubmitButton onClick={onSendMessage}>Отправить</SubmitButton>
    </div>
  );
};
