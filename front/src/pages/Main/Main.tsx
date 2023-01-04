import React, { FC } from "react";
import { Layout } from "../../components/layout/Layout";
import { SignIn } from "../../components/screens/index";
import { ThemeToggle } from "../../components/ui/themeToggle/ThemeToggle";
import { ThemeContext, themes } from "../../contexts/ThemeContext";

// interface IThemeChange {
//   theme: string;
//   setTheme: React.ReactNode
// }

const Main: FC = () => {
  return (
    <Layout>
      <SignIn />
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
    </Layout>
  );
};

export default Main;
