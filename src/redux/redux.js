import { configureStore } from "@reduxjs/toolkit";
import statSlice from "./stat-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: { users: userSlice.reducer, stats: statSlice.reducer },
});

export default store;
