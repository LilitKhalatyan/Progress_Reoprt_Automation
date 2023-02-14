import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Header from "../components/Header/Header";
import LeftMenu from "../components/LeftMenu/LeftMenu";

import "../style/style.scss";

const AdminLayout: React.FC = (): JSX.Element => {

  if (localStorage.getItem("token")) {
    return (
      <>
        <div className="main__container">
          <Header />
          <div className="page__container">
            <div className="page__content">
              <LeftMenu />
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
  }
  return <Navigate to="/login" />;
};

export default AdminLayout;
