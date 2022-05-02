import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "../counter/counterAPI";
import { admin, basic, guest } from "./userTypes";

const initialState = {
    login: null,
    type: guest,
    value: 0,
    status: "idle",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
    "counter/fetchCount",
    async (amount) => {
        const response = await fetchCount(amount);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const userReducer = createSlice({
    name: "user",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        signIn: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.type = action.payloadtype;
            state.login = action.payload.login;
        },
        signOut: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.type = guest;
            state.login = null;
        },
    },
});

export const { signOut, signIn } = userReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUserLogin = (state) => state.user.login;

export default userReducer.reducer;
