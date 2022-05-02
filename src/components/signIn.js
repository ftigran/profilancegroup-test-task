import React from "react";
import { useDispatch } from "react-redux";
import "./signIn.scss";
import { signIn } from "../features/user/userSlice";
import { users } from "../features/user/users";

export const SignIn = () => {
    const dispatch = useDispatch();

    const [isOpenned, setIsOpenned] = React.useState(false);
    const [isHasError, setIsHasError] = React.useState(false);
    const showPopin = () => {
        setIsOpenned(true);
    };
    const closePopin = () => {
        setIsOpenned(false);
    };

    const loginRef = React.useRef();
    const passwordRef = React.useRef();
    const loginUser = () => {
        const login = loginRef.current.value;
        const password = passwordRef.current.value;
        const user = users[login];

        if (user && user.password === password) {
            dispatch(
                signIn({
                    login,
                    type: user.type,
                })
            );
            console.log(user, user.type);
            return;
        }
        setIsHasError(true);
    };

    return (
        <>
            <button
                className="user__button_login user__button"
                onClick={showPopin}
            >
                Войти
            </button>
            {isOpenned && (
                <div className="popin">
                    <div className="popin__inner sign-in">
                        <button className="popin__close" onClick={closePopin}>
                            X
                        </button>
                        <h1>Войти</h1>
                        <div>
                            <label htmlFor="login">Логин</label>
                            <input ref={loginRef} id="login" />
                        </div>
                        <div>
                            <label htmlFor="password">Пароль</label>
                            <input
                                ref={passwordRef}
                                id="password"
                                type="password"
                            />
                        </div>
                        {isHasError && (
                            <div>
                                <span className="sign-in__error">
                                    Пользователь не найден!
                                </span>
                            </div>
                        )}
                        <div>
                            <button
                                className="sign-in__button"
                                onClick={loginUser}
                            >
                                Войти
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
