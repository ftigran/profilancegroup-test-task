import { createSlice } from "@reduxjs/toolkit";
import { admin, basic, guest } from "./userTypes";

const initialState = {
    login: null,
    type: admin,
    value: 0,
    status: "idle",
};

export const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.type = action.payload.type;
            state.login = action.payload.login;
        },
        signOut: (state) => {
            state.type = guest;
            state.login = null;
        },
    },
});

export const { signOut, signIn } = userReducer.actions;

export const selectUserLogin = (state) => state.user.login;
export const selectUserType = (state) => state.user.type;

export default userReducer.reducer;
