import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header/Header";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import { authSelector } from "../redux/auth/authSelector";
import { refreshAction } from "../redux/auth/authSlice";

import "../style/style.scss";

const AdminLayout: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const auth = useSelector(authSelector);

    useEffect(() => {
        if (localStorage.getItem("user")) {
            let data = JSON.parse(localStorage.getItem("user") || "");
            dispatch(refreshAction(data));
        }
    }, []);

    if (auth || localStorage.getItem("user")) {
        return (
            <div className="main__container">
                <Header />
                <div className="page__container">
                    <div className="page__content">
                        <LeftMenu />
                        <Outlet />
                    </div>
                </div>
            </div>
        );
    }
    return <Navigate to="/login" replace={true} />;
};

export default AdminLayout;
