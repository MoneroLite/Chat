import React, { FC } from "react";
import styles from "./basicInput.module.scss";
import { IInput } from "../../../../types/input.interface";

interface IBasicInput extends IInput {}

export const BasicInput: FC<IBasicInput> = ({ ...rest }) => {
  return <input className={styles.input} {...rest} />;
};
