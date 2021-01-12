import { createSlice, createSelector } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    email: '',
    password: '',
    userName: '',
    isConfirmed: false,
  },
  reducers: {
    setEmail: (state, action) => ({
      ...state,
      email: action.payload,
    }),
    setPassword: (state, action) => ({
      ...state,
      password: action.payload,
    }),
    setName: (state, action) => ({
      ...state,
      userName: action.payload,
    }),
    setIsConfirmed: (state, action) => ({
      ...state,
      isConfirmed: action.payload,
    }),
  },
});

export const {
  setEmail, setPassword, setName, setIsConfirmed,
} = formSlice.actions;

const selectForm = (state) => state.form;
export const formSelector = createSelector(
  selectForm,
  (form) => form,
);
export default formSlice.reducer;
