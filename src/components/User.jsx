import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userSelector } from '../features/reduxSlices/userSlice';

export const User = () => {
  const history = useHistory();
  const user = useSelector(userSelector);
  return (
    <div>
      <p>
        {JSON.stringify(user)}
      </p>
      <button type="button" onClick={() => { history.push('/'); }}>Back</button>
    </div>
  );
};
