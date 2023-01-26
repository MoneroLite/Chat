import React, { FC } from "react";
import { Header } from "./header/Header";
import styles from "./layout.module.scss";

interface ILayout {
  children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
