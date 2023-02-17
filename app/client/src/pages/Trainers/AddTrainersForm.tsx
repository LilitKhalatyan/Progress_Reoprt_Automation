import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import Multiselect from "multiselect-react-dropdown";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { createTrainerAction } from "../../redux/trainer/trainerSlice";
import { trainerSelector } from "../../redux/trainer/selectors";

interface IProps {
    data: {
        id: number;
        name: string;
    }[];
}
interface SelectElement {
    id: number;
    name: string;
}

const AddTrainersForm: React.FC<IProps> = (props) => {
    const dispatch = useDispatch();
    const trainer = useSelector(trainerSelector);
    const onSubmit = (data: any) => {
        const dataSelect = {
            name: data.name,
            surname: data.surname,
            email: data.email,
            courseId: data.multiselect.map((el: SelectElement) => el.id),
        };
        reset({ name: "", surname: "", email: "" });
        dispatch(createTrainerAction(dataSelect));
    };
    const onFail = (error: any) => {
        console.log(error, "Error");
    };

    const {
        control,
        register,
        reset,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<{
        name: string;
        surname: string;
        email: string;
        multiselect: string;
    }>();

    //sa setValue anelu hamara editi jamanak,bayc der verjacrac chi
    // useEffect(()=> {
    //     if(trainer[0]?.name) {
    //         setValue("name",`${trainer[0]?.name}`)
    //         setValue("surname",`${trainer[0]?.surname}`)
    //     }

    // },[trainer])
    return (
        <form
            className="add-group-form__content"
            onSubmit={handleSubmit(onSubmit, onFail)}>
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
                            <span className="input-invalid">
                                This field is required
                            </span>
                        )}
                        {errors.name.type === "pattern" && (
                            <span className="input-invalid">
                                Please enter valid name
                            </span>
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
                            <span className="input-invalid">
                                This field is required
                            </span>
                        )}
                        {errors.surname.type === "pattern" && (
                            <span className="input-invalid">
                                Please enter valid name
                            </span>
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
                            <span className="input-invalid">
                                This field is required
                            </span>
                        )}
                        {errors.email.type === "pattern" && (
                            <span className="input-invalid">
                                Please enter valid name
                            </span>
                        )}
                    </>
                ) : null}
            </div>
            <div className="input__grp">
                <Controller
                    control={control}
                    name="multiselect"
                    render={({ field: { onChange, value } }) => {
                        console.log(value);

                        return (
                            <Multiselect
                                className="multi-select"
                                options={props.data}
                                onSelect={onChange}
                                displayValue="name"
                                {...register("multiselect", {
                                    required: true,
                                })}
                            />
                        );
                    }}
                />

                {errors.multiselect ? (
                    <>
                        {errors.multiselect.type === "required" && (
                            <span className="input-invalid">
                                This field is required
                            </span>
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
