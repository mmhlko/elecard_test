import {BASE_URL} from "storage/data/api/constants";
import s from "./styles.module.scss";
import {memo, useState} from "react";
import {TCard} from "modules/card-list/types/cardListTypes";
import {useDispatch} from "react-redux";
import {cardListSelector, deleteCardListItemAction} from "modules/card-list";
import classNames from "classnames";
import {getDate} from "utils/getDate";
import { setDeletedCardAction } from "storage/storageData/store/storageDataActions";
import { useAppSelector } from "storage/hookTypes";
import { setStartItemAction } from "modules/card-list/store/cardListActions";

export const Card = memo(({image, category, timestamp, filesize}: TCard) => {

    const dispatch = useDispatch();
    const [removing, setRemoving] = useState(false)
    const { startItem } = useAppSelector(cardListSelector)

    const handleCloseClick = () => {
        setRemoving(true)
        setTimeout(() => {
            dispatch(deleteCardListItemAction(image))
            dispatch(setDeletedCardAction(image))
            startItem > 1 && dispatch(setStartItemAction(startItem - 1))
        }, 250)
    }

    return (
        <article className={classNames(s.card_wrapper, {[s.removing]: removing})}>
            <img className={s.card_image} src={`${BASE_URL}${image}`} alt={category}/>
            <div className={s.card_text}>
                <p>{`Название файла: ${image.split("/")[1]}`}</p>
                <p>{`Размер файла: ${filesize} B`}</p>
                <p>{`Дата: ${getDate(timestamp)}`}</p>
                <p>{`Категория: ${category}`}</p>
            </div>
            <button className={s.close_btn} onClick={handleCloseClick}>x</button>
        </article>
    )
})
