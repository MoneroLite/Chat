import React, { FC } from "react";
import { Layout } from "../../components/layout/Layout";
import { SignIn } from "../../components/screens/index";

// interface IThemeChange {
//   theme: string;
//   setTheme: React.ReactNode
// }

const Main: FC = () => {
  return (
    <Layout>
      <SignIn />
    </Layout>
  );
};

export default Main;
