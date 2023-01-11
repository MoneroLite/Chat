import React, { useEffect, useState } from "react";
import { MessageItem } from "./messageItem/MessageItem";
import styles from "./messages.module.scss";

export const Messages = ({ socket, params }: any) => {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    socket.on("message", ({ data }) => {
      setMessages((_messages) => [..._messages, data]);
    });
  }, []);
  return (
    <div className={styles.messagesWrap}>
      <div className={styles.messages}>
        {messages.map(({ message, user }: any, i) => {
          const itsMe =
            user.name.trim().toLowerCase() === params.name.trim().toLowerCase();
          const className = itsMe ? styles.me : styles.user;

          return (
            <MessageItem
              key={i}
              user={user}
              message={message}
              className={className}
            />
          );
        })}
      </div>
    </div>
  );
};
