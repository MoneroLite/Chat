import React, { FC } from "react";
import style from "./layout.module.scss";

interface ILayout {
  children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return <main>{children}</main>;
};
