import React, { FC } from "react";
import style from "./basicInput.module.scss";
import { IInput } from "../../../../types/input.interface";

interface IBasicInput extends IInput {}

export const BasicInput: FC<IBasicInput> = ({ ...rest }) => {
  return <input className={style.input} {...rest} />;
};
