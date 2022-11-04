import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isloggedin: false,
  },
  reducers: {
    signin: (state, action) => {
      state.isloggedin = true;
      state.user=action.payload
    },
    signup: (state , action)=> {
      state.isloggedin = true;
      state.user=action.payload
    },
    signout: (state) => {
      state.isloggedin = false;
    },
  },
});

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

export const { signin,signup, signout } = authSlice.actions;

export default store;
