import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reduxSlices/userSlice';
import formReducer from './reduxSlices/formSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
  },
});
