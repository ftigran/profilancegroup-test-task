import React from "react";
import { useSelector } from "react-redux";
import "./News.scss";
import { selectUserType } from "../features/user/userSlice";
import { selectNews } from "../features/news/newsSlice";
import { guest, admin } from "../features/user/userTypes";
import { NewsItem } from "../components/NewsItem";
import { CreateNewsButton } from "../components/CreateNewsButton";

const NewsList = React.memo(({ news, isAdmin }) => {
    if (news && news.length)
        return news.map((data) => (
            <NewsItem isAdmin={isAdmin} key={data.id} data={data} />
        ));
    return <h3>Новостей нет!</h3>;
});

export const News = () => {
    let news = useSelector(selectNews);
    const [query, setQuery] = React.useState("");
    const type = useSelector(selectUserType);
    const isAdmin = type === admin;
    const isGuest = type === guest;

    if (isGuest) {
        news = news.filter(({ isApproved }) => isApproved);
    }
    if (query) {
        let trimmedQuery = query.trim().toLowerCase();
        news = news.filter(
            ({ title, description }) =>
                title.toLowerCase().includes(trimmedQuery) ||
                description.toLowerCase().includes(trimmedQuery)
        );
    }
    return (
        <div className="newspage">
            <h1>Новости</h1>
            <div className="news">
                <div className="news__controls">
                    <input
                        className="search"
                        placeholder="Введите запрос"
                        value={query}
                        onChange={({ target: { value } }) => setQuery(value)}
                    />
                    {!isGuest && <CreateNewsButton />}
                </div>
                <NewsList isAdmin={isAdmin} news={news} />
            </div>
        </div>
    );
};
