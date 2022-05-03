import React from "react";
import { useDispatch } from "react-redux";
// import "./News.scss";
import { createNews } from "../features/news/newsSlice";
import { Popin } from "./Popin";

export const CreateNewsButton = () => {
    const [open, setOpen] = React.useState(false);
    const [isHasError, setIsHasError] = React.useState(false);
    const dispatch = useDispatch();

    const titleRef = React.useRef();
    const descriptionRef = React.useRef();

    const ckeckNews = () => {
        const title = titleRef.current.value.trim();
        const description = descriptionRef.current.value.trim();
        if (title && description) {
            const date = new Date();
            const prettyDate = `${date.getHours()}:${date.getMinutes()} ${date.toLocaleDateString(
                "ru"
            )}`;
            dispatch(
                createNews({
                    title,
                    description,
                    date: prettyDate,
                })
            );
            setOpen(false);
            return;
        }
        setIsHasError(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <button onClick={() => setOpen(true)}>+Добавить</button>
            <Popin open={open} onClose={onClose} className="popin_create-news">
                <h1>Добавить новость</h1>
                <div>
                    <label htmlFor="title">Заголовок</label>
                    <input ref={titleRef} id="title" />
                </div>
                <div>
                    <label htmlFor="description">Описание</label>
                    <textarea ref={descriptionRef} id="description" />
                </div>
                {isHasError && (
                    <div>
                        <span className="error">Заполните все поля!</span>
                    </div>
                )}
                <div>
                    <button onClick={ckeckNews}>Добавить</button>
                </div>
            </Popin>
        </>
    );
};
