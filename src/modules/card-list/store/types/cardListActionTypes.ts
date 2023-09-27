import { SET_CARDLIST, SET_CARDLIST_ERROR, IS_CARDLIST_LOADING, SET_CURRENT_SORT, DELETE_CARDLIST_ITEM }  from "modules/card-list/store/cardListActionTypeNames";
import { TCard } from "modules/card-list/types/cardListTypes";

export type TSpotsActions =  TCardListDataAction | TCardListDataError | TCardListDataLoading | TCurrentSortAction | TDeleteCardListItemAction;

export type TCardListDataAction = {
    type: typeof SET_CARDLIST,
    payload: TCard[]
}

export type TCardListDataError = {
    type: typeof SET_CARDLIST_ERROR,
    payload: string
}

export type TCardListDataLoading = {
    type: typeof IS_CARDLIST_LOADING,
    payload: boolean
}

export type TCurrentSortAction = {
    type: typeof SET_CURRENT_SORT,
    payload: string
}

export type TDeleteCardListItemAction = {
    type: typeof DELETE_CARDLIST_ITEM,
    payload: string
}