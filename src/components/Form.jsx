/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EmailRegButton } from './EmailRegButton';
import { FireBaseAuthButton } from './GoogleRegButton';
import { Input } from './Input';
import { googleIcon, facebookIcon } from '../icons/icons';
import { SubmitDivider } from './SubmitDivider';
import { formSelector } from '../features/reduxSlices/formSlice';
import { setUser } from '../features/reduxSlices/userSlice';

export const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const formValue = useSelector(formSelector);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setUser(formValue));
    history.push('/user');
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="form__header">Register</h2>
          <div className="inputs">
            <Input type="text" id="userName" label="User name" />
            <Input type="email" id="userEmail" label="E-mail" />
            <Input type="password" id="userPassword" label="Password" />
            <Input type="checkbox" id="userAgreement" />
          </div>
          <div className="form__buttonGroup submit">
            <EmailRegButton name="email" />
            <SubmitDivider />
            <div className="submit__firebaseAuth">
              <FireBaseAuthButton icon={googleIcon} authMethod="Google" name="google" />
              <FireBaseAuthButton icon={facebookIcon} authMethod="Facebook" name="facebook" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
