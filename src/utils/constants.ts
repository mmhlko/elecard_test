import { Tab } from "modules/card-list/types/cardListTypes";

export enum ListTypes {
    cardList = "cardList",
    treeList = "treeList",
}

export const SWITCH_TABS: Tab[] = [
    {
        id: ListTypes.cardList,
        title: "Список карточек",
    },
    {
        id: ListTypes.treeList,
        title: "Древовидный список",
    }
]

export const PAGE_SIZE = 6