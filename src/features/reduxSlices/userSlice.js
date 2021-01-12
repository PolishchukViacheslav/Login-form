import { createSlice, createSelector } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {},
  },
  reducers: {
    setUser: (state, action) => ({
      ...state,
      userInfo: action.payload,
    }),
  },
});

export const { setUser } = userSlice.actions;

const selectUser = (state) => state.user.userInfo;
export const userSelector = createSelector(
  selectUser,
  (user) => user,
);
export default userSlice.reducer;
