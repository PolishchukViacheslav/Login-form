/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/reduxSlices/userSlice';
import { useFirebaseAuth } from '../firebase';

export const FireBaseAuthButton = ({ name, icon, authMethod }) => {
  const dispatch = useDispatch();
  const { launchAuth } = useFirebaseAuth();
  const onClick = async ({ target }) => {
    try {
      const user = await launchAuth(target.name);
      dispatch(setUser(user));
    } catch (error) {
      console.error('Authentication failed');
    }
  };

  return (
    <button type="button" value={name} onClick={onClick} name={name} className="submit__firebaseAuth--byGoogle">
      <div role="img" aria-label="Authentication service icon">{icon}</div>
      <span>{`Join with ${authMethod}`}</span>
    </button>
  );
};
