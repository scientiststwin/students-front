import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/new" element={<div>NEW</div>} />
      <Route path="/home" element={<div>home</div>} />
    </Routes>
  );
};

export default AppRouter;
