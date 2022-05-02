import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useSelector } from "react-redux";
import "./Header.scss";
import { selectUserLogin } from "../features/user/userSlice";

export const Header = () => {
    const login = useSelector(selectUserLogin);

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={logo} />
            </Link>
            <div className="header__user">
                {login ? (
                    <>
                        <b>{login}</b>
                        <div>Выйти</div>
                    </>
                ) : (
                    <div>Войти</div>
                )}
            </div>
        </header>
    );
};
