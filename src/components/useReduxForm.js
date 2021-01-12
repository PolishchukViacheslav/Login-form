import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  formSelector,
  setEmail, setIsConfirmed, setName, setPassword,
} from '../features/reduxSlices/formSlice';

export const useReduxForm = () => {
  const {
    email, password, userName, isConfirmed,
  } = useSelector(formSelector);
  const dispatch = useDispatch();
  const setValueToReduxFor = useCallback((id, value) => {
    switch (id) {
      case 'userEmail':
        dispatch(setEmail(value));
        break;
      case 'userPassword':
        dispatch(setPassword(value));
        break;
      case 'userAgreement':
        dispatch(setIsConfirmed(value));
        break;
      case 'userName':
        dispatch(setName(value));
        break;

      default:
        break;
    }
  }, []);

  const selectValueFromRedux = useCallback((id) => {
    switch (id) {
      case 'userEmail':
        return email;
      case 'userPassword':
        return password;
      case 'userAgreement':
        return isConfirmed;
      case 'userName':
        return userName;

      default:
        return null;
    }
  }, []);

  return {
    setValueToReduxFor,
    selectValueFromRedux,
  };
};
