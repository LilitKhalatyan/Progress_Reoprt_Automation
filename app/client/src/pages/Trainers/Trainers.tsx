import React, { useState } from "react";
import UsersList from "../../components/UsersList/UsersList";

import "./trainers.scss";

const trainers = [
  { id: 1, name: "John", surname: "Doe", email: "nameX@gemail.com" },
  { id: 2, name: "Jam", surname: "Yang", email: "nameX@gemail.com" },
  { id: 3, name: "Tom", surname: "Mirzoyan", email: "nameX@gemail.com" },
  { id: 4, name: "Ann", surname: "Hardy", email: "nameX@gemail.com" },
  { id: 1, name: "John", surname: "Doe", email: "nameX@gemail.com" },
  { id: 2, name: "Jam", surname: "Yang", email: "nameX@gemail.com" },
  { id: 3, name: "Tom", surname: "Mirzoyan", email: "nameX@gemail.com" },
  { id: 4, name: "Ann", surname: "Hardy", email: "nameX@gemail.com" },
  { id: 1, name: "John", surname: "Doe", email: "nameX@gemail.com" },
  { id: 2, name: "Jam", surname: "Yang", email: "nameX@gemail.com" },
  { id: 3, name: "Tom", surname: "Mirzoyan", email: "nameX@gemail.com" },
  { id: 4, name: "Ann", surname: "Hardy", email: "nameX@gemail.com" },
];

const Trainers: React.FC = () => {
  const [displayAdd, setDisplayAdd] = useState(false);

  return (
    <>
      <UsersList
        data={trainers}
        display={displayAdd}
        setDisplay={setDisplayAdd}
      />
    </>
  );
};

export default Trainers;
