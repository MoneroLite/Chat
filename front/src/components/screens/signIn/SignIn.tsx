import React from "react";
import { SubmitButton } from "../../ui/buttons/main/SubmitButton";
import { BasicInput } from "../../ui/inputs/main/BasicInput";
import styles from "./signIn.module.scss";

export const SignIn = () => {
  return (
    <div>
      <BasicInput />
      <BasicInput />
      <SubmitButton>Войти</SubmitButton>
    </div>
  );
};
