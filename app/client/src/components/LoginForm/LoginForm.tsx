import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import logo from '../../asset/images/logo.svg';
import "./loginForm.css";

const fieldsRegexp: any = {
  email: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
  password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
};

const LoginForm: React.FC = () => {

  const [values, setValues] = useState({ email: '', password: '' });
  const [isFieldsValid, setIsFieldsValid] = useState({ email: false, password: false });

  const inputValidation = (target: HTMLInputElement) => {
    const isValid = fieldsRegexp[target.name].test(target.value) ;
    setIsFieldsValid(prevState => ({ ...prevState, [target.name]: isValid }));
  };

  const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    inputValidation(e.target);
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
            isValid={isFieldsValid.email}
            placeholder='Adminemail'
            value={values.email}
            dataplaceholder="&#128129;"
            onChange={handleInputChanged} />
          <Input
            name='password'
            type='password'
            isValid={isFieldsValid.password}
            placeholder='*****************'
            value={values.password}
            dataplaceholder="&#128272;"
            onChange={handleInputChanged} />
          <Button isDisabled={false} value='Log In' onClick={() => onSubmit(values.email, values.password)} />
        </div>
      </div>
    </div>
  )
}

export default  LoginForm;