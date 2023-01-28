import React, { FC } from "react";
import { Header } from "./header/Header";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./layout.module.scss";

interface ILayout {
  children: React.ReactNode;
}

const variant = {
  hidden: { x: 100, opacity: 0 },
  show: { opacity: 1, x: 0 },
  close: { x: -100, opacity: 0 },
};

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <motion.main
        variants={variant}
        initial="hidden"
        animate="show"
        exit="close"
        transition={{
          ease: "linear",
          duration: 0.2,
        }}
        className={styles.main}
      >
        {children}
      </motion.main>
    </div>
  );
};
