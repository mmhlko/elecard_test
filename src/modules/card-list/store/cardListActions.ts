import { TCardListDataAction, TCardListDataError, TCurrentSortAction, TDeleteCardListItemAction, TResetCardListAction, TSetStartItemAction } from "modules/card-list/store/types/cardListActionTypes";
import { TCard } from "modules/card-list/types/cardListTypes";
import { DELETE_CARDLIST_ITEM, RESET_CARDLIST, SET_CARDLIST, SET_CARDLIST_ERROR, SET_DATA_BY_CURRENT_SORT, SET_START_ITEM } from "./cardListActionTypeNames";

export const setCardListAction = (data: TCard[]): TCardListDataAction => {
    return {
        type: SET_CARDLIST,
        payload: data,
    }
}

export const resetCardListAction = (data: TCard[]): TResetCardListAction => {
    return {
        type: RESET_CARDLIST,
        payload: data
    }
}

export const setCardListErrorAction = (error: string): TCardListDataError => {
    return {
        type: SET_CARDLIST_ERROR,
        payload: error        
    }
}

export const setDataByCurrentSortAction = (sort: string): TCurrentSortAction => {
    return {
        type: SET_DATA_BY_CURRENT_SORT,
        payload: sort        
    }
}

export const deleteCardListItemAction = (name: string): TDeleteCardListItemAction => {
    return {
        type: DELETE_CARDLIST_ITEM,
        payload: name        
    }
}

export const setStartItemAction = (number: number): TSetStartItemAction => {
    return {
        type: SET_START_ITEM,
        payload: number,
    }
}
