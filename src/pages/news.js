import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./News.scss";
import { selectUserType } from "../features/user/userSlice";
import { selectNews, approveNews } from "../features/news/newsSlice";
import { guest, admin } from "../features/user/userTypes";

const ApproveButton = ({ newsId }) => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(approveNews(newsId))}>
            Одобрить?{newsId}
        </button>
    );
};

const NewsItem = ({
    isAdmin,
    data: { id, title, description, date, isApproved },
}) => (
    <div className="news-item">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="news-item__info">
            <div>{date}</div>
            <div>
                {isApproved ? (
                    "Одобрено ✅"
                ) : isAdmin ? (
                    <ApproveButton newsId={id} />
                ) : (
                    "❌ Не одобрено"
                )}
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
