import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import {FormContainer, SignUpContainer, SignUpTitle} from "./sign-up.styles";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const dispatch = useDispatch();
  const signUpStartHandler = (userCredentials) =>
      dispatch(signUpStart(userCredentials));

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStartHandler({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign in with your email and password</span>

        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormContainer>
            <FormInput
                style={{width: "360px", margin: "1vh auto"}}
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='Display Name'
                required
            />
            <FormInput
                style={{width: "360px", margin: "1vh auto"}}
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                required
            />
            <FormInput
                style={{width: "360px", margin: "1vh auto"}}
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label='Password'
                required
            />
            <FormInput
                style={{width: "360px", margin: "1vh auto"}}
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label='Confirm Password'
                required
            />
            <CustomButton type='submit' style={{width: "380px", margin: "10px auto"}}>SIGN UP</CustomButton>
          </FormContainer>
        </form>
      </SignUpContainer>
  );
};

export default SignUp;
