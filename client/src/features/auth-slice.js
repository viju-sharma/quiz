import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.id = action.payload._id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.picture = action.payload.picture;
    },
    logout: (state) => {
      state = {};
    },
  },
});

export const { login, logout, getUser } = authSlice.actions;
export default authSlice.reducer;
