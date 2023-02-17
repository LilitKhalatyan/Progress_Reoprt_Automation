import { createSlice } from '@reduxjs/toolkit';
const localUser = JSON.parse(localStorage.getItem('user') || 'null');

const initialState = {
	user: localUser || {},
	auth: !!localUser,
};

const authSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		loginAction: (state, action) => {},
		loginSuccesed: (state, action) => {
			state.user = action.payload;
			state.auth = true;
		},
		loginFailed: (state) => {
			state = initialState;
		},
		logoutAction: () => {},
		logoutSuccesed: (state) => {
			state = initialState;
		},
	},
});

export const { loginAction, loginFailed, logoutAction, loginSuccesed, logoutSuccesed } = authSlice.actions;

export default authSlice;
