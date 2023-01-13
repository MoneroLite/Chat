import React from "react";
import { ThemeContext, themes } from "../../../contexts/ThemeContext";
import { ThemeToggle } from "../../ui/themeToggle/ThemeToggle";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerWrap}>
      <p>CHAT</p>
      <div>
        <ThemeContext.Consumer>
          {({ theme, setTheme }: any) => (
            <ThemeToggle
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark);
                if (theme === themes.dark) setTheme(themes.light);
              }}
              value={theme === themes.dark}
            />
          )}
        </ThemeContext.Consumer>
      </div>
    </header>
  );
};
