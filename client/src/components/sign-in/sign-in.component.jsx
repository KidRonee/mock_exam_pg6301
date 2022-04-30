import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart, activeDirectorySignInStart,
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  FormContainer,
} from './sign-in.styles.jsx';

const SignIn = () => {
  const dispatch = useDispatch();
  const googleSignInStartClickHandler = () => dispatch(googleSignInStart());
  const activeDirectorySignInStartClickHandler = () => dispatch(activeDirectorySignInStart());
  const emailSignInStartHandler = (email, password) =>
      dispatch(emailSignInStart({ email, password }));

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStartHandler(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormContainer>
            <FormInput style={{width: "360px", margin: "1vh auto"}}
                name='email'
                type='email'
                handleChange={handleChange}
                value={email}
                label='email'
                required
            />
            <FormInput
                style={{width: "360px", margin: "1vh auto"}}
                name='password'
                type='password'
                value={password}
                handleChange={handleChange}
                label='password'
                required
            />
          </FormContainer>
          <ButtonsBarContainer>
            <CustomButton type='submit' style={{margin: "1px 0"}}> Sign in </CustomButton>
            <CustomButton
                type='button'
                style={{margin: "1px 0"}}
                onClick={googleSignInStartClickHandler}
                isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
            <CustomButton
                type='button'
                style={{margin: "1px 0"}}
                onClick={activeDirectorySignInStartClickHandler}
                isActiveDirectorySignIn
            >
              Sign in with Active Directory
            </CustomButton>
          </ButtonsBarContainer>
        </form>

      </SignInContainer>
  );
};

export default SignIn;
