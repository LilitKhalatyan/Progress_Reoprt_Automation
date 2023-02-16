import React, { useRef, useEffect, useMemo } from "react";
import AddStudentsForm from "../../pages/Students/AddStudentsForm";
import AddTrainersForm from "../../pages/Trainers/AddTrainersForm";
import AddSubjectsForm from "../../pages/Subjects/AddSubjectsForm";
import AddGroupsForm from "../../pages/Groups/AddGroupsForm";
import CloseIcon from "../CloseIcon/CloseIcon";

import "./addItem.scss";

const group = [
  { id: 1, name: "Front End" },
  { id: 2, name: "Back End" },
  { id: 3, name: "AI / ML" },
];


const trainers = [
  { id: 1, name: "John", surname: "Doe", email: "nameX@gemail.com" },
  { id: 2, name: "Jam", surname: "Yang", email: "nameX@gemail.com" },
  { id: 3, name: "Tom", surname: "Mirzoyan", email: "nameX@gemail.com" },
  { id: 4, name: "Ann", surname: "Hardy", email: "nameX@gemail.com" },
  { id: 1, name: "John", surname: "Doe", email: "nameX@gemail.com" },
  { id: 2, name: "Jam", surname: "Yang", email: "nameX@gemail.com" }
];

interface IProps {
  title: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddItem: React.FC<IProps> = (props) => {
  // useEffect(() => {
  //   if (props.show) {
  //     document.body.style.opacity = ".4";
  //     console.log('style')
  //   } else {
  //     document.body.style.opacity = "1";
  //   }
  // }, [props.show]);

  const useOutsideClick = (ref: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
          props.setShow(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef);

  let className = props.show ? "add-item show" : "add-item";

  const formComponent = useMemo(() => {
    switch (props.title) {
        case "Students":
          return <AddStudentsForm data={group} />;
        case "Trainers":
          return <AddTrainersForm data={group} />;
        case "Subjects":
          return <AddSubjectsForm data={group} dataTrainers={trainers}/>;
        case "Groups":
          return <AddGroupsForm />;
      }
  }, [props.title])

  return (
    <div className={className} ref={wrapperRef}>
      <div className="add-item__content">
        <CloseIcon
          onClick={() => {
            props.setShow(false);
          }}
        />
        {formComponent}
      </div>
    </div>
  );
};

export default AddItem;
