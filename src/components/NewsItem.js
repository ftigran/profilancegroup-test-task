import React from "react";
import { useDispatch } from "react-redux";
import "./NewsItem.scss";
import { approveNews,deleteNews } from "../features/news/newsSlice";

const ApproveButton = ({ newsId }) => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(approveNews(newsId))} className="news-item__approve-button">
            Одобрить?
        </button>
    );
};

const DeleteButton = ({ newsId }) => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(deleteNews(newsId))} className="news-item__delete-button">
            Удалить
        </button>
    );
};

export const NewsItem = ({
    isAdmin,
    data: { id, title, description, date, isApproved },
}) => (
    <div className="news-item">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="news-item__info">
            <div>{date}</div>
            <div>
                {isAdmin &&<DeleteButton newsId={id}/>}
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

