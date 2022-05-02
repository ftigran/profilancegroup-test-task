import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useSelector, useDispatch } from "react-redux";
import "./Header.scss";
import { selectUserLogin, loggout } from "../features/user/userSlice";

export const Header = () => {
    const login = useSelector(selectUserLogin);
    const dispatch = useDispatch();

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={logo} />
            </Link>
            <div className="header__user user">
                {login ? (
                    <>
                        <b className="user__login">{login},</b>
                        <div>
                            <button
                                className="user__button_loggout user__button"
                                onClick={() => {
                                    dispatch(loggout());
                                    console.log(55);
                                }}
                            >
                                Выйти?
                            </button>
                        </div>
                    </>
                ) : (
                    <div>Войти</div>
                )}
            </div>
        </header>
    );
};
