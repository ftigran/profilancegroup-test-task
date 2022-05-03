import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useSelector, useDispatch } from "react-redux";
import "./Header.scss";
import { selectUserLogin, signOut } from "../features/user/userSlice";
import { SignIn } from "./SignIn";

export const Header = () => {
    const login = useSelector(selectUserLogin);
    const dispatch = useDispatch();

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={logo} alt="Логотип профиланс групп" />
            </Link>
            <div className="header__nav">
                <Link to="/news">Новости</Link>
                <div className="header__user user">
                    {login ? (
                        <>
                            <b className="user__login">{login},</b>
                            <button
                                className="user__button_sign-out user__button"
                                onClick={() => {
                                    dispatch(signOut());
                                }}
                            >
                                Выйти?
                            </button>
                        </>
                    ) : (
                        <SignIn />
                    )}
                </div>
            </div>
        </header>
    );
};
