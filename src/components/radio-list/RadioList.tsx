import s from "./styles.module.scss";
import {ReactNode, memo} from "react";
import {Tab} from "modules/card-list/types/cardListTypes";

type TRadioListProps = {
    tabs: { id: string, title: string }[],
    action: (arg: string) => void,
    children?: ReactNode,
    title: string,
    defaultChecked?: boolean,
    extraClass?: string
}

export const RadioList = memo(({tabs, action, title, children, defaultChecked, extraClass}: TRadioListProps) => {

    const returnSortListItem = (item: Tab, index: number) => {

        const handleInputChange = () => {
            action(item.id)
        }

        return (
            <li key={index}>
                <input onChange={handleInputChange} type="radio" id={item.id + index} name="sorting" value={item.id}
                       defaultChecked={index === 0 && defaultChecked && true}/>
                <label htmlFor={item.id + index} className="button">{item.title}</label>
            </li>
        )
    }

    return (
        <div className={extraClass}>
            <div className={s.wrapper}>
                <h2>{title}</h2>
                <ul className={s.radio_list}>
                    {tabs.map(returnSortListItem)}
                </ul>
                {children}
            </div>
        </div>
    )
})