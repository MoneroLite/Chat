import React from "react";
import styles from "./messageItem.module.scss";

export const MessageItem = ({ key, user, message, className }: any) => {
  return (
    <div key={key} className={`${styles.message} ${className}`}>
      <span className={styles.user}>{user.name}</span>
      <div className={styles.text}>{message}</div>
    </div>
  );
};
