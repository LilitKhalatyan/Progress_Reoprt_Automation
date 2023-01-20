import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import logo from '../../asset/images/logo.svg';
import "./loginForm.css";

let emailValid = false;
let passValid = false;
let buttonDisabled = false;

export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputValidation = (pattern: any) => {
    pattern.test(email) ? emailValid = buttonDisabled = true : emailValid = buttonDisabled = false;
    pattern.test(password) ? passValid = buttonDisabled = true : passValid = buttonDisabled = false;
  }

  const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
      inputValidation(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/);
    } else {
      setPassword(e.target.value);
      inputValidation(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
    }
  }

  const onSubmit = (email: string, password: string) => {
    //function for post data object{email, password} and navigate to main page
  }

  return (
    <div className='login-form'>
      <div className='login-form__content'>
        <div className='login-form__logo'>
          <img src={logo} alt="Sourceminde logo" />
        </div>
        <div className='login-form__fildes'>
          <Input
            name='email'
            type='email'
            isValid={emailValid}
            placeholder='Adminemail'
            value={email}
            dataplaceholder="&#128129;"
            onChange={handleInputChanged} />
          <Input
            name='password'
            type='password'
            isValid={passValid}
            placeholder='*****************'
            value={password}
            dataplaceholder="&#128272;"
            onChange={handleInputChanged} />
          <Button isDisabled={buttonDisabled} value='Log In' onClick={() => onSubmit(email, password)} />
        </div>
      </div>
    </div>
  )
}
