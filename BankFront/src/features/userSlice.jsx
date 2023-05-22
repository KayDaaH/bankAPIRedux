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
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
