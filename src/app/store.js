import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import newsReducer from "../features/news/newsSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        news: newsReducer,
    },
});
