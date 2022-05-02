import React from "react";
import { useSelector } from "react-redux";
import "./News.scss";
import { selectUserType } from "../features/user/userSlice";
import { selectNews } from "../features/news/newsSlice";
import { guest, admin } from "../features/user/userTypes";
import { NewsItem } from "../components/NewsItem";

export const News = () => {
    let filteredNews = useSelector(selectNews);
    const type = useSelector(selectUserType);
    const isAdmin = type === admin;
    const isGuest = type === guest;
    if (isGuest) {
        filteredNews = filteredNews.filter(({ isApproved }) => isApproved);
    }
    return (
        <div className="newspage">
            <h1>Новости</h1>
            <div className="news">
                <div className="news__controls">
                    <input placeholder="Введите запрос"/>
                    <button>➕ Добавить</button>
                </div>
                {filteredNews && filteredNews.length ? (
                    filteredNews.map((data) => (
                        <NewsItem isAdmin={isAdmin} key={data.id} data={data} />
                    ))
                ) : (
                    <h3>Новостей нет!</h3>
                )}
            </div>
        </div>
    );
};
