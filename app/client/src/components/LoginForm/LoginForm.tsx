import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logo from "../../asset/images/logo.svg";

import "./loginForm.scss";

const LoginForm: React.FC = () => {
  const [isPassVisibile, setPassVisibile] = useState({
    icon: faEyeSlash,
    type: "password",
  });

  const togglePassVisibility = () => {
    setPassVisibile((prevState) => {
      if (prevState.icon === faEyeSlash) {
        return { icon: faEye, type: "text" };
      }
      return { icon: faEyeSlash, type: "password" };
    });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string; password: string }>();

  const onSubmit = (data: any) => {
    console.log(
      JSON.stringify({
        email: data.email,
        password: data.password,
      })
    );
  };
  const onFail = (error: any) => {
    console.log(error, "Error");
  };

  return (
    <div className="login-form__container">
      <div className="login-form__content">
        <div className="login-form__logo">
          <img src={logo} alt="Sourceminde logo" />
        </div>
        <form
          className="login-form__fildes"
          onSubmit={handleSubmit(onSubmit, onFail)}
        >
          <div className="wrap-input">
            <input
              type="email"
              className="login-input"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
              })}
            />
            {errors.email ? (
              <>
                {(errors.email.type === "required" ||
                  errors.email.type === "pattern") && (
                  <span className="focus-input focus-input-email invalid"></span>
                )}
              </>
            ) : (
              <span className="focus-input focus-input-email valid"/>
            )}
          </div>
          <div className="wrap-input">
            <input
              type={isPassVisibile.type}
              className="login-input"
              placeholder="Password"
              {...register("password", {
                required: true,
                pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
              })}
            />
            {errors.password ? (
              <>
                {(errors.password.type === "required" ||
                  errors.password.type === "pattern") && (
                  <span className="focus-input focus-input-password invalid"></span>
                )}
              </>
            ) : (
              <span className="focus-input focus-input-password valid"/>
            )}
          </div>
          <button className="fa-eye-btn" onClick={togglePassVisibility}>
            <FontAwesomeIcon icon={isPassVisibile.icon} size="lg" />
          </button>
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
