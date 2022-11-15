import { createSlice, configureStore } from "@reduxjs/toolkit";
const curUserj =  (localStorage.getItem('user'))
    const curUser=JSON.parse(curUserj)
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: curUser,
    isloggedin: !!curUser,
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
