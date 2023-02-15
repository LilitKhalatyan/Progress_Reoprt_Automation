import React, { useState } from "react";
import UsersList from "../../components/UsersList/UsersList";
// import "./subjects.scss";

const subjects = [
  { id: 1, name: "DevOps" },
  { id: 2, name: "HTML/CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "Java" },
  { id: 1, name: "NodeJS" },
  { id: 2, name: "CS" },
  { id: 3, name: "QA" },
  { id: 4, name: "React/Redux" },
];

const Subjects: React.FC = () => {
  const [displayAdd, setDisplayAdd] = useState(false);

  return (
    <>
      <UsersList
        title="Subjects"
        data={subjects}
        display={displayAdd}
        setDisplay={setDisplayAdd}
      />
    </>
  );
};

export default Subjects;
