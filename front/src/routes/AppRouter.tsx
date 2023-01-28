import { AnimatePresence } from "framer-motion";
import React, { FC } from "react";
import { Navigate, Route, useLocation } from "react-router";
import { Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

const AppRouter: FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
