import { TCard } from "modules/card-list/types/cardListTypes";
import { SET_DATA_LIST, IS_DATA_LIST_LOADING, SET_DATA_LIST_ERROR, SET_LIST_TYPE } from "./dataListActionTypeNames";
import { TDataListActions, TDataListDataError, TDataListDataLoading, TSetListTypeAction } from "./types/dataListActionTypes";
import { ListTypes } from "utils/constants";

export const setDataListAction = (data: TCard[]): TDataListActions => {
    return {
        type: SET_DATA_LIST,
        payload: data,
    }
}
export const isDataListLoadingAction = (isLoading: boolean): TDataListDataLoading => {
    return {
        type: IS_DATA_LIST_LOADING,
        payload: isLoading        
    }
}
export const setDataListErrorAction = (error: string): TDataListDataError => {
    return {
        type: SET_DATA_LIST_ERROR,
        payload: error        
    }
}

export const setListTypeAction = (data: ListTypes): TSetListTypeAction => {
    return {
        type: SET_LIST_TYPE,
        payload: data,
    }
}