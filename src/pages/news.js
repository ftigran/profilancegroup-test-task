import React from "react";
import { useSelector } from "react-redux";
import "./news.scss";
import { selectUserType } from "../features/user/userSlice";
import { selectNews } from "../features/news/newsSlice";
import { guest, admin } from "../features/user/userTypes";

const NewsItem = ({
    isAdmin,
    data: { title, description, date, isApproved },
}) => (
    <div className="news-item">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="news-item__info">
            <div>{date}</div>
            <div>
                {isApproved
                    ? "Одобрено ✅"
                    : isAdmin
                    ? "Одобрить?"
                    : "❌ Не одобрено"}
            </div>
        </div>
    </div>
);

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
