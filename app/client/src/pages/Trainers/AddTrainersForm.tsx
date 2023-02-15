import React from "react";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import Multiselect from "multiselect-react-dropdown";
import Button from "../../components/Button/Button";

const trainers = [
  { name: "John", id: 1 },
  { name: "Tom", id: 2 },
];

interface IProps {
  data: any;
}

const AddTrainersForm: React.FC<any> = (props) => {
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
    surname: string;
    email: string;
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
        <label htmlFor="surname" className="input">
          <input
            type="text"
            className="input__field"
            placeholder=" "
            id="surname"
            {...register("name", {
              required: true,
              pattern: /[a-zA-Z]/,
            })}
          />
          <span className="input__label">Surname</span>
        </label>
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
        <label htmlFor="email" className="input">
          <input
            type="email"
            className="input__field"
            placeholder=" "
            id="email"
            {...register("email", {
              required: true,
              pattern: /[a-zA-Z]/,
            })}
          />
          <span className="input__label">Email</span>
        </label>
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
        {/* <select
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
        </select> */}
        <Multiselect
          className="multi-select"
          options={props.data} // Options to display in the dropdown
          // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
          // onSelect={this.onSelect} // Function will trigger on select event
          // onRemove={this.onRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          {...register("select", {
            required: true,
          })}
        />
        {errors.select ? (
          <>
            {errors.select.type === "required" && (
              <span className="input-invalid">This field is required</span>
            )}
          </>
        ) : null}
      </div>
      <div className="input__grp">
        <Button value="Add Trainer" />
      </div>
    </form>
  );
};

export default AddTrainersForm;
