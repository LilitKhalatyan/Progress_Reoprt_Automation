import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

function AuthLayout() {
   //For example
    if (localStorage.getItem("token")) {
      return (
        <>
          <Outlet />
        </>
      );
    }
    return <Navigate to={"/login"} />;
}

export default AuthLayout;