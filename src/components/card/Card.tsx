import {BASE_URL} from "modules/card-list/api/constants";
import s from "./styles.module.scss";
import {memo, useState} from "react";
import {TCard} from "modules/card-list/types/cardListTypes";
import {useDispatch} from "react-redux";
import {deleteCardListItemAction} from "modules/card-list";
import classNames from "classnames";
import {getDate} from "utils/getDate";

export const Card = memo(({image, category, timestamp, filesize}: TCard) => {

    const dispatch = useDispatch();
    const [removing, setRemoving] = useState(false)

    const handleCloseClick = () => {
        setRemoving(true)
        setTimeout(() => {
            dispatch(deleteCardListItemAction(image))
        }, 250)
    }

    return (
        <article className={classNames(s.card_wrapper, {[s.removing]: removing})}>
            <img className={s.card_image} src={`${BASE_URL}${image}`} alt={category}/>
            <div className={s.card_text}>Lorem ipsum dolor sit amet.</div>
            <div className={s.card_text}>
                <p>{`Название файла: ${image.split("/")[1]}`}</p>
                <p>{`Размер файла: ${filesize}`}</p>
                <p>{`Дата: ${getDate(timestamp)}`}</p>
                <p>{`Категория: ${category}`}</p>
            </div>
            <button className={s.close_btn} onClick={handleCloseClick}>x</button>
        </article>
    )
})
