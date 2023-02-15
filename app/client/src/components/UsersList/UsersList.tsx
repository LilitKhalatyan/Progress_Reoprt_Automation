import React, { useState } from "react";
import AddItem from "../../components/AddItem/AddItem";
import Button from "../Button/Button";
import addIcon from "../../asset/images/pages/add.png";
import editIcon from "../../asset/images/pages/edit.png";
import deleteIcon from "../../asset/images/pages/delete.png";

import "./usersList.scss";
import AddGroup from "../../pages/Groups/AddGroup/AddGroup";

interface IProps {
  data: {
    id: number;
    name: string;
    surname?: string;
    email?: string;
    groupId?: number;
  }[];
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const group = [
  { id: 1, name: "Front End" },
  { id: 2, name: "Back End" },
  { id: 3, name: "AI / ML" },
];

const UsersList: React.FC<IProps> = (props): JSX.Element => {
  // const [select, setSelect] = useState("all");
  const { data, display, setDisplay } = props;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setSelect(e.target.value);
  };

  return (
    <div className="users__container">
      <div className="users__content">
        <div className="wrapper-line">
        <div className="users__header">
          <div className="head-filter__grp">
            <input type="text" className="users-search" />
            <select
              name=""
              id=""
              className="users-sort"
              value='{select}'
              onChange={handleSelectChange}
            >
              <option value="all">All</option>
              {group.map((option) => {
                return <option value={option.id}>{option.name}</option>;
              })}
            </select>
          </div>
          <div className="head-add">
            <Button
              className="add-btn"
              title="add student"
              src={addIcon}
              onClick={() => setDisplay(true)}
            />
            <AddItem show={display} setShow={setDisplay} />
          </div>
        </div>
        <div className="main-users__list">
          <hr />
          {data.map((item) => {
            return (
              <div className="list-item" key={Math.random()}>
                <div className="info-grp">
                  <input
                    type="text"
                    value={item.name}
                    onChange={() => console.log("first")}
                  />
                  <input
                    type="text"
                    value={item.surname}
                    onChange={() => console.log("first")}
                  />
                  <input
                    type="text"
                    value={item.email}
                    onChange={() => console.log("first")}
                  />
                </div>
                <div className="edit-grp">
                  <Button
                    className="users-btn"
                    title="edit student"
                    src={editIcon}
                    onClick={() => console.log("click")}
                  />
                  <Button
                    className="users-btn"
                    title="delete student"
                    src={deleteIcon}
                    onClick={() => console.log("click")}
                  />
                </div>
              </div>
            );
          })}
          <hr />
        </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
