import React from "react";
import { Outlet } from "react-router-dom";
import '../style/style.css'

function MainLayout() {
    return (
        <div className="wrapper">
            <div className="main__container">
                <Outlet/>
            </div>
        </div>
    );
}

export default MainLayout;