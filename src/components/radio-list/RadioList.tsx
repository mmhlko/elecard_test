import s from "./styles.module.scss";
import {ReactNode, memo} from "react";
import {Tab} from "modules/card-list/types/cardListTypes";

type TRadioListProps = {
    tabs: { id: string, title: string }[],
    name: string,
    action: (arg: string) => void,
    children?: ReactNode,
    title: string,
    extraClass?: string
    currentCheckedItem?: string,
    defaultChecked?: boolean
}

export const RadioList = memo(({name, tabs, action, title, children, extraClass, currentCheckedItem}: TRadioListProps) => {

    const returnSortListItem = (item: Tab, index: number) => {
        const handleInputChange = () => {           
            action(item.id)
        }        

        return (
            <li key={index}>
                <input 
                    onChange={handleInputChange} 
                    type="radio" id={item.id + index} 
                    name={name} value={item.id}
                    checked={item.id === currentCheckedItem}
                    />
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