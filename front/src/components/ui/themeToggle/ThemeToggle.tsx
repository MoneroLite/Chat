import React, { FC, MouseEventHandler } from "react";
import styles from "./themeToggle.module.scss";

interface IThemeToggle {
  value: boolean;
  onChange: MouseEventHandler;
}

export const ThemeToggle: FC<IThemeToggle> = ({ value, onChange }) => {
  return (
    <>
      <input
        className={styles.input}
        id="toggler"
        type="checkbox"
        onClick={onChange}
        checked={value}
        readOnly
      />
      <label
        className={styles.root}
        data-onlabel="темня"
        data-offlabel="светлая"
        htmlFor="toggler"
      ></label>
    </>
  );
};
