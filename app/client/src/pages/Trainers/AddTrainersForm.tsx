import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Multiselect from "multiselect-react-dropdown";
import Select from 'react-select';
import Button from "../../components/Button/Button";

interface IProps {
  data: {
    id: number;
    name: string;
  }[];
}

interface IState {
  id: number;
  name: string;
}

const AddTrainersForm: React.FC<IProps> = (props) => {
  const [select, setSelect] = useState<IState[]>([])

  const handleSelectChange = (e: React.ChangeEvent<any>) => {
// setSelect(e);
// console.log(e.target.value)
console.log(e)

  }
  const onSubmit = (data: any) => {
    console.log(
      JSON.stringify({
        name: data.name,
        surname: data.surname,
        email: data.email,
        multiselect: data.multiselect
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
    multiselect: string;
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
            {...register("surname", {
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
      <Controller
          control={control}
          name="multiselect"
          render={({ field: { onChange, value } }) => (
            <Multiselect
            className="multi-select"
            options={props.data} // Options to display in the dropdown
            selectedValues={value ? value : []} // Preselected value to persist in dropdown
            onSelect={onChange} // Function will trigger on select event
            // onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            {...register("multiselect", {
              required: true,
            })}
          />
          )}
        />
       
        {errors.multiselect ? (
          <>
            {errors.multiselect.type === "required" && (
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
