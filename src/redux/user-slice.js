import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    userList: [],
  },
  reducers: {
    updateUserList(state, action) {
      state.userList = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
