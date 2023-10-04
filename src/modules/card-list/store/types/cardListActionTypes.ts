import { SET_CARDLIST, SET_CARDLIST_ERROR, SET_DATA_BY_CURRENT_SORT, DELETE_CARDLIST_ITEM, RESET_CARDLIST, SET_START_ITEM }  from "modules/card-list/store/cardListActionTypeNames";
import { TCard } from "modules/card-list/types/cardListTypes";

export type TCardListActions =  TCardListDataAction | TCardListDataError | TCurrentSortAction | TDeleteCardListItemAction | TResetCardListAction | TSetStartItemAction ;


export type TSetStartItemAction = {
    type: typeof SET_START_ITEM,
    payload: number
}

export type TCardListDataAction = {
    type: typeof SET_CARDLIST,
    payload: TCard[]
}

export type TResetCardListAction = {
    type: typeof RESET_CARDLIST,
    payload: TCard[]
}

export type TCardListDataError = {
    type: typeof SET_CARDLIST_ERROR,
    payload: string
}

export type TCurrentSortAction = {
    type: typeof SET_DATA_BY_CURRENT_SORT,
    payload: string
}

export type TDeleteCardListItemAction = {
    type: typeof DELETE_CARDLIST_ITEM,
    payload: string
}


