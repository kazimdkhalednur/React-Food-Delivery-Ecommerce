import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: undefined,
  userType: undefined,
	authenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setUser: (state, action) => {
			state.user = action.payload;
		},
    setUserType: (state, action) => {
			state.userType = action.payload;
		},
		setAuthenticated: (state, action) => {
			state.authenticated = action.payload;
		},
  },
});

export const { setUser, setUserType, setAuthenticated } = authSlice.actions;

export default authSlice.reducer;
