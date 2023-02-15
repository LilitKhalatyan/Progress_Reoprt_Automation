import React from "react";
import logo from "../../asset/images/logo.svg";
import "./header.scss";

const Header:React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <div className="header__logo">
            <img src={logo} alt="Sourceminde logo" />
          </div>
          {/* <div className="header__date">
            {new Date().toJSON()}
          </div> */}
        </div>
      </div>
    </header>
  );
}
export default Header;