import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import New from "../pages/new/new";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/new" element={<New />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
