import { TCardListDataAction, TCardListDataError, TCardListDataLoading, TCurrentSortAction, TDeleteCardListItemAction } from "modules/card-list/store/types/cardListActionTypes";
import { TCard } from "modules/card-list/types/cardListTypes";
import { DELETE_CARDLIST_ITEM, IS_CARDLIST_LOADING, SET_CARDLIST, SET_CARDLIST_ERROR, SET_CURRENT_SORT } from "./cardListActionTypeNames";

export const setCardListAction = (data: TCard[]): TCardListDataAction => {
    return {
        type: SET_CARDLIST,
        payload: data,
    }
}

export const setCardListErrorAction = (error: string): TCardListDataError => {
    return {
        type: SET_CARDLIST_ERROR,
        payload: error        
    }
}

export const isCardListLoadingAction = (isLoading: boolean): TCardListDataLoading => {
    return {
        type: IS_CARDLIST_LOADING,
        payload: isLoading        
    }
}

export const setCurrentSortAction = (sort: string): TCurrentSortAction => {
    return {
        type: SET_CURRENT_SORT,
        payload: sort        
    }
}

export const deleteCardListItemAction = (name: string): TDeleteCardListItemAction => {
    return {
        type: DELETE_CARDLIST_ITEM,
        payload: name        
    }
}
