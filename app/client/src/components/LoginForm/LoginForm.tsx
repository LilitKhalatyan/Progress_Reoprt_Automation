import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import logo from '../../asset/images/logo.svg';
import "./loginForm.css";

let emailClassName = 'focus-input';
let passClassName = 'focus-input';
let buttonDisabled = 'disabled-btn'

export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputValidation = (pattern: any) => {
    pattern.test(password) ? passClassName = 'focus-input valid' : passClassName = 'focus-input invalid';
    if (pattern.test(email)) {
       emailClassName = 'focus-input valid';
       buttonDisabled = '';
    } else {
      emailClassName = 'focus-input invalid';
      buttonDisabled = 'disabled-btn'
    }
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
            className={emailClassName}
            placeholder='Adminemail'
            value={email}
            dataplaceholder="&#128129;"
            onChange={handleInputChanged} />
          <Input
            name='password'
            type='password'
            className={passClassName}
            placeholder='*****************'
            value={password}
            dataplaceholder="&#128272;"
            onChange={handleInputChanged} />
          <Button className={buttonDisabled} value='Log In' onClick={() => onSubmit(email, password)} />
        </div>
      </div>
    </div>
  )
}
