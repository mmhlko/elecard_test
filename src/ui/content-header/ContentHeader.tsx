import {memo} from "react";
import s from "./styles.module.scss";
import {TContentHeaderProps} from "./types";

export const ContentHeader = memo(({title}: TContentHeaderProps) => {

    return (
        <h1 className={s.title}>{title}</h1>
    )
})