import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

function PublicLayout() {
  //For example
    if (!localStorage.getItem("token")) {
      return (
        <>
          <Outlet />
        </>
      );
    }
    return <Navigate to={"/posts"} />;
}

export default PublicLayout;