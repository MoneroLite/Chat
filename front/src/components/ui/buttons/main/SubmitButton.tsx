import React, { FC } from "react";
import { IButton } from "../../../../types/button.interface";
import styles from "./submitButton.module.scss";

interface IMainButton extends IButton {
  children: React.ReactNode;
}

export const SubmitButton: FC<IMainButton> = ({ children, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};
