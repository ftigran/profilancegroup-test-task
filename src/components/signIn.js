import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../features/user/userSlice";
import { users } from "../features/user/users";
import { Popin } from "./Popin";

export const SignIn = () => {
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const [isHasError, setIsHasError] = React.useState(false);
    const showPopin = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
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
            <Popin open={open} onClose={onClose} className="sign-in">
                <h1>Войти</h1>
                <div>
                    <label htmlFor="login">Логин</label>
                    <input ref={loginRef} id="login" />
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input ref={passwordRef} id="password" type="password" />
                </div>
                {isHasError && (
                    <div>
                        <span className="error">Пользователь не найден!</span>
                    </div>
                )}
                <div>
                    <button onClick={loginUser}>Войти</button>
                </div>
            </Popin>
        </>
    );
};
