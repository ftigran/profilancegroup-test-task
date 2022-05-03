import { createSlice } from "@reduxjs/toolkit";
import { news } from "./news";

const initialState = {
    news: news,
};

export const newsReducer = createSlice({
    name: "news",
    initialState,
    reducers: {
        createNews: (state, action) => {
            const lastNews = state.news[state.news.length - 1];
            const id = lastNews ? lastNews.id + 1 : 0;
            const currentNews = Object.assign(
                { id, isApproved: false },
                action.payload
            );
            state.news.push(currentNews);
        },
        approveNews: (state, action) => {
            const approvedNews = state.news.find(
                ({ id }) => id === action.payload
            );
            if (approvedNews) approvedNews.isApproved = true;
        },
        deleteNews: (state, action) => {
            state.news = state.news.filter(({ id }) => id !== action.payload);
        },
    },
});

export const { createNews, approveNews, deleteNews } = newsReducer.actions;

export const selectNews = (state) => state.news.news;

export default newsReducer.reducer;
