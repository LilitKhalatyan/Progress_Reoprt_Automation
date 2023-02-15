import React, { useState } from "react";
import UsersList from "../../components/UsersList/UsersList";
import "./groups.scss";

const group = [
  { id: 1, name: "Front End" },
  { id: 2, name: "Back End" },
  { id: 3, name: "AI / ML" },
];

const Groups: React.FC = (): JSX.Element => {
  const [displayAdd, setDisplayAdd] = useState(false);

  return (
    <>
      <UsersList data={group} display={displayAdd} setDisplay={setDisplayAdd} />
    </>
  );
};

export default Groups;