import { createSlice } from "@reduxjs/toolkit";
import { news } from "./news";

const newsLSName = 'news'
const initialState = {
    news: JSON.parse(localStorage.getItem(newsLSName)) || news,
    value: 0,
    status: "idle",
};

const writeLSNews = (news) => sessionStorage.setItem(newsLSName, news);
export const newsReducer = createSlice({
    name: "news",
    initialState,
    reducers: {
        createNews: (state, action) => {
            state.type = action.payloadtype;
            state.login = action.payload.login;
        },
        approveNews: (state) => {
            writeLSNews(state.news)
        },
    },
});

export const { necreateNewsws, approveNews } = newsReducer.actions;

export const selectNews = (state) => state.news.news;

export default newsReducer.reducer;
