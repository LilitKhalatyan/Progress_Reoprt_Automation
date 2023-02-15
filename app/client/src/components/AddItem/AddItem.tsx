import React, { useRef, useEffect } from "react";
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

  const addFormComponent = () => {
    switch (props.title) {
      case "Students":
        return <AddStudentsForm data={group} />;
      case "Trainers":
        return <AddTrainersForm data={group} />;
      case "Subjects":
        return <AddSubjectsForm data={group} />;
      case "Groups":
        return <AddGroupsForm />;
    }
  };
  return (
    <div className={className} ref={wrapperRef}>
      <div className="add-item__content">
        <CloseIcon
          onClick={() => {
            props.setShow(false);
          }}
        />
        {addFormComponent()}
      </div>
    </div>
  );
};

export default AddItem;
