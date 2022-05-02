import { createSlice } from "@reduxjs/toolkit";
import { news } from "./news";

const initialState = {
    news: news,
    value: 0,
    status: "idle",
};

export const newsReducer = createSlice({
    name: "news",
    initialState,
    reducers: {
        createNews: (state, action) => {
            state.type = action.payloadtype;
            state.login = action.payload.login;
        },
        approveNews: (state, action) => {
            const approvedNews = state.news.find(
                ({ id }) => id === action.payload
            );
            if (approvedNews) approvedNews.isApproved = true;
        },
    },
});

export const { createNews, approveNews } = newsReducer.actions;

export const selectNews = (state) => state.news.news;

export default newsReducer.reducer;
