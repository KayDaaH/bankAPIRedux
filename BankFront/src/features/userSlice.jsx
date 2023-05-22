import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    firstName: null,
    lastName: null,
    userId: null,
  },
  reducers: {
    setUserData: (state, { payload }) => {
      const { token, firstName, lastName, userId } = payload;
      state.token = token;
      state.firstName = firstName;
      state.lastName = lastName;
      state.userId = userId;
    },
    editUserData: (state, { payload }) => {
      const { firstName, lastName } = payload;
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
});

export const { setUserData, editUserData } = userSlice.actions;
export default userSlice.reducer;
