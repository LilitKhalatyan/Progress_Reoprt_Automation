import React from "react";
import { Outlet } from "react-router-dom";
import "../style/style.scss";

function MainLayout() {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  );
}

export default MainLayout;
