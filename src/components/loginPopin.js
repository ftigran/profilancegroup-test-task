import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useSelector, useDispatch } from "react-redux";
import "./loginPopin.scss";
import { selectUserLogin, loggout } from "../features/user/userSlice";

export const LoginPopin = () => {
    const dispatch = useDispatch();

    const [isOpenned, setIsOpenned] = React.useState(true);
    const showPopin = () => {
        setIsOpenned(true)
    }
    const closePopin = () => {
        setIsOpenned(false)
    }

    return (
        <>
        <button className="user__button_login user__button"
        onClick={showPopin}>Войти</button>
        {isOpenned && <div className="popin">
            <div className="popin__inner login">
                <button className="popin__close" onClick={closePopin}>X</button>
                <h1>Войти</h1>
                <div>
                    <label for='login'>Логин</label>
                    <input id="login"/>
                </div>
                <div>
                    <label for='password' type="password">Пароль</label>
                    <input id="password"/>
                </div>
                <div>
                    <button className="login__button">Войти</button>
                </div>
            </div>
        </div>}    
        </>
    )
}

