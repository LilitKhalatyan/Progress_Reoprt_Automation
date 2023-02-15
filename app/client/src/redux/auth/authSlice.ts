import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    auth: false,
};

const authSlice = createSlice({
    name: "user",
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
        refreshAction: (state, action) => {},
        refreshUserSuccess: (state, action) => {
            state.user = action.payload;
            state.auth = true;
        },
        logoutAction: () => {},
        logoutSuccesed: (state) => {
            state = initialState;
        },
    },
});

export const {
    loginAction,
    loginFailed,
    logoutAction,
    refreshAction,
    loginSuccesed,
    logoutSuccesed,
    refreshUserSuccess,
} = authSlice.actions;

export default authSlice;
