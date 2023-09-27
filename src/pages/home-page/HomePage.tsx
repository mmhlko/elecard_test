import {RadioList} from "components/radio-list/RadioList";
import {CardList} from "modules/card-list";
import {TreeList} from "modules/tree-list";
import {useState} from "react";
import {LIST_TABS} from "utils/constants";

export const HomePage = () => {

    const [switcher, setSwitcher] = useState(true)
    const handleSwitchChange = () => {
        setSwitcher(!switcher)
    }

    return (
        <>
            <RadioList title="Выбор списка" action={handleSwitchChange} tabs={LIST_TABS} extraClass="container"
                       defaultChecked/>
            {switcher ? <CardList/> : <TreeList/>}
        </>
    );
}