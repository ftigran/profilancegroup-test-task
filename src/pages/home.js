import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./home.scss";
import { selectUserLogin } from "../features/user/userSlice";

export const Home = () => {
    const login = useSelector(selectUserLogin);

    return (
        <div className="homepage">
            <h1>Главная</h1>
            <p className="homepage__user-name">
                Привет, {login ? login : "Гость"}
            </p>
            <div>
                <Link to="/news" className="">
                    Новости
                </Link>
            </div>
        </div>
    );
};
