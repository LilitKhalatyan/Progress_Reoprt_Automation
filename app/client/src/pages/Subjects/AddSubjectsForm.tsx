import React from "react";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";

interface IProps {
  data: any;
}

const AddSubjectsForm: React.FC<any> = (props) => {
  const onSubmit = (data: any) => {
    console.log(
      JSON.stringify({
        name: data.name,
        startDate: data.startDate,
        endDate: data.endDate,
      })
    );
  };
  const onFail = (error: any) => {
    console.log(error, "Error");
  };

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{
    name: string;
    select: string;
  }>();
  return (
    <form
      className="add-group-form__content"
      onSubmit={handleSubmit(onSubmit, onFail)}
    >
      <div className="input__grp">
      <label htmlFor="name" className="input">
          <input
            type="text"
            className="input__field"
            placeholder=" "
            id="name"
            {...register("name", {
              required: true,
              pattern: /[a-zA-Z]/,
            })}
          />
          <span className="input__label">Name</span>
        </label>
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
        <select
          id="select"
          {...register("select", {
            required: true,
          })}
        >
          <option key={uuid()} value="" disabled selected hidden>
            Select group name
          </option>
          {props.data.map((option: any) => {
            return (
              <option key={uuid()} value={option.name}>
                {option.name}
              </option>
            );
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
      <div className="input__grp">
        <select
          id="select"
          {...register("select", {
            required: true,
          })}
        >
          <option key={uuid()} value="" disabled selected hidden>
            Select Trainer
          </option>
          {props.data.map((option: any) => {
            return (
              <option key={uuid()} value={option.name}>
                {option.name}
              </option>
            );
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
      <div className="input__grp">
        <Button value="Add Subject" />
      </div>
    </form>
  );
};

export default AddSubjectsForm;
