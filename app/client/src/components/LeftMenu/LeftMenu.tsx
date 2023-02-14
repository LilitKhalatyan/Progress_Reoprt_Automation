import React from "react";
import { useNavigate } from "react-router-dom";
import "./leftMenu.scss";

const icons = [
  "trainers-icon",
  "groups-icon",
  "students-icon",
  "subjects-icon",
  "settings-icon",
];

const LeftMenu: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const handleListItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    navigate(e.currentTarget.id);
  };
  return (
    <div className="menu">
      <div className="menu__container">
        <nav>
          <ul>
            {icons.map((icon) => {
              return (
                <li
                  key={icon}
                  id={icon.slice(0, -5)}
                  onClick={handleListItemClick}
                >
                  <div className={icon}></div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LeftMenu;
