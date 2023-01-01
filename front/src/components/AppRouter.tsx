import React, { FC } from "react";
import { Navigate, Route } from "react-router";
import { Routes } from "react-router-dom";
import { publicRoutes } from "../utils/routes";

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRouter;
