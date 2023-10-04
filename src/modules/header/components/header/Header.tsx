import { Logo } from "components/logo/Logo";
import s from "./styles.module.scss";
import classnames from "classnames";
import { LegacyRef, memo } from "react";
import { RadioList } from "components/radio-list/RadioList";
import { ListTypes, SWITCH_TABS } from "utils/constants";
import { useAppSelector } from "storage/hookTypes";
import { useDispatch } from "react-redux";
import { setListTypeAction } from "storage/data/store/dataListActions";

type THeaderProps = {
    headerRef: LegacyRef<HTMLElement>
}

export const Header = memo(({ headerRef }: THeaderProps) => {

    const dispatch = useDispatch();
    const listType = useAppSelector(state => state.dataList.listType)
    const handleSwitchChange = () => {
        listType === ListTypes.cardList ? dispatch(setListTypeAction(ListTypes.treeList)) : dispatch(setListTypeAction(ListTypes.cardList))
    }

    return (
        <header ref={headerRef} className={s.wrapper}>
            <div className={classnames("container", s.header)}>
                <Logo />
                <RadioList
                    name="list-types"
                    title="Выбор списка"
                    action={handleSwitchChange}
                    tabs={SWITCH_TABS}
                    extraClass={s.header_radio}
                    currentCheckedItem={listType}
                    defaultChecked
                />
            </div>
        </header>
    );
})