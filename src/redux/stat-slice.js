import { createSlice } from "@reduxjs/toolkit";

const statSlice = createSlice({
  name: "stats",
  initialState: {
    youngestMember: [],
    oldestMember: [],
  },
  reducers: {
    updateYoungestMember(state, action) {
      state.youngestMember = action.payload;
    },
    updateOldestMember(state, action) {
      state.oldestMember = action.payload;
    },
  },
});

export const statActions = statSlice.actions;

export default statSlice;
