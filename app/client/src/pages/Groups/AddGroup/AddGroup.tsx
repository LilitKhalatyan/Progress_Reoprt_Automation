import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import CloseIcon from "../../../components/CloseIcon/CloseIcon";

import "react-datepicker/src/stylesheets/datepicker.scss";
import "./addGroup.scss";
import Button from "../../../components/Button/Button";

interface IProps {
  show: boolean;
  setAddGroup: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddGroup: React.FC<IProps> = (props): JSX.Element => {
  let className = props.show ? "add-group show" : "add-group";

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
  } = useForm<{ name: string; startDate: string; endDate: string }>();

  return (
    <div className={className}>
      <div className="add-group__content">
        <CloseIcon
          onClick={() => {
            props.setAddGroup(false);
          }}
        />
        <form
          className="add-group-form__content"
          onSubmit={handleSubmit(successCase, failCase)}
        >
          <div className="input__grp">
            <label htmlFor="name" className="input__label">
              Group Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter group Name"
              className="input__field"
              {...register("name", {
                required: true,
                pattern: /[a-z0-9A-Z]{2,4}/,
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
            <label htmlFor="start-date" className="input__label">Start Date</label>
            <Controller
              control={control}
              name="startDate"
              render={({ field }: any) => (
                <DatePicker
                  selected={field.value}
                  minDate={new Date()}
                  onChange={(date: Date) => field.onChange(date)}
                  selectsStart
                  startDate={new Date()}
                  endDate={new Date()}
                  placeholderText="Select Start Date"
                  id="start-date"
                />
              )}
            />
          </div>
          <div className="input__grp">
            <label htmlFor="end-date" className="input__label">End Date</label>
            <Controller
              control={control}
              name="endDate"
              render={({ field }: any) => (
                <DatePicker
                  selected={field.value}
                  minDate={new Date()}
                  onChange={(date: Date) => field.onChange(date)}
                  selectsEnd
                  startDate={new Date()}
                  endDate={new Date()}
                  placeholderText="Select End Date"
                  id="end-date"
                />
              )}
            />
          </div>
          <Button value="Add Group"/>
        </form>
      </div>
    </div>
  );
};

export default AddGroup;
