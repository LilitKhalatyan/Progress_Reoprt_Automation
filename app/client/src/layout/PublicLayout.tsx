import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { authSelector } from "../redux/auth/authSelector";
import { logoutAction } from "../redux/auth/authSlice";

const PublicLayout = () => {
    useSelector(authSelector); //stipum e krkin refresh anel ej@ ev redirect anel
    const dispatch = useDispatch();

    if (!localStorage.getItem("user")) {
        dispatch(logoutAction());
        return <Outlet />;
    }
    return <Navigate to="/" replace={true} />;
};

export default PublicLayout;
