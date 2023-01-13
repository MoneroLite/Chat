import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../../ui/buttons/main/SubmitButton";
import { BasicInput } from "../../ui/inputs/main/BasicInput";
import styles from "./signIn.module.scss";

export const SignIn = () => {
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const onClickJoin = () => {
    nav(`/chat?name=${name}&room=${room}`);
  };

  return (
    <div className={styles.signinWrap}>
      <BasicInput
        className={styles.inputName}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <BasicInput
        className={styles.inputRoom}
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <SubmitButton className={styles.btnJoin} onClick={onClickJoin}>
        Войти
      </SubmitButton>
    </div>
  );
};
