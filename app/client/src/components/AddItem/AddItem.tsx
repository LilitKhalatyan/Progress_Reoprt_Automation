import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import CloseIcon from "../CloseIcon/CloseIcon";

import "./addItem.scss";

const group = [
  { id: 1, name: "Front End" },
  { id: 2, name: "Back End" },
  { id: 3, name: "AI / ML" },
];

interface IProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddItem: React.FC<IProps> = (props): JSX.Element => {
  let className = props.show ? "add-item show" : "add-item";

  const successCase = (data: any) => {
    console.log(
      JSON.stringify({
        name: data.name,
        startDate: data.startDate,
        endDate: data.endDate,
      })
    );
  };
  const failCase = (error: any) => {
    console.log(error, "Error");
  };

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ name: string; surname: string; email: string, select: string }>();

  return (
    <div className={className}>
      <div className="add-item__content">
        <CloseIcon
          onClick={() => {
            props.setShow(false);
          }}
        />
        <form
          className="add-group-form__content"
          onSubmit={handleSubmit(successCase, failCase)}
        >
          <div className="input__grp">
            <label htmlFor="name" className="input__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter group Name"
              className="input__field"
              {...register("name", {
                required: true,
                pattern: /[a-zA-Z]/,
              })}
            />
            {errors.name ? (
              <>
                {errors.name.type === "required" && (
                  <span className="input-invalid">This field is required</span>
                )}
                {errors.name.type === "pattern" && (
                  <span className="input-invalid">Please enter valid name</span>
                )}
              </>
            ) : null}
          </div>
          <div className="input__grp">
            <label htmlFor="name" className="input__label">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              placeholder="Enter group Name"
              className="input__field"
              {...register("surname", {
                required: true,
                pattern: /[a-zA-Z]/,
              })}
            />
            {errors.surname ? (
              <>
                {errors.surname.type === "required" && (
                  <span className="input-invalid">This field is required</span>
                )}
                {errors.surname.type === "pattern" && (
                  <span className="input-invalid">Please enter valid name</span>
                )}
              </>
            ) : null}
          </div>
          <div className="input__grp">
            <label htmlFor="email" className="input__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter group Name"
              className="input__field"
              {...register("email", {
                required: true,
                pattern: /[a-z0-9A-Z]{2,4}/,
              })}
            />
            {errors.email ? (
              <>
                {errors.email.type === "required" && (
                  <span className="input-invalid">This field is required</span>
                )}
                {errors.email.type === "pattern" && (
                  <span className="input-invalid">Please enter valid name</span>
                )}
              </>
            ) : null}
          </div>
          <div className="input__grp">
            <label htmlFor="select" className="input__label">
              Groups
            </label>
            <select id="select"
            {...register("select", {
              required: true,
            })}>
           <option value="" disabled selected hidden>Select group name</option>
              {group.map((option) => {
                return <option value={option.name}>{option.name}</option>;
              })}
            </select>
            {errors.select ? (
              <>
                {errors.select.type === "required" && (
                  <span className="input-invalid">This field is required</span>
                )}
              </>
            ) : null}
          </div>
          <Button value="Add Student"/>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
