import { TCard } from "modules/card-list/types/cardListTypes";
import { IS_DATA_LIST_LOADING, SET_DATA_LIST, SET_DATA_LIST_ERROR, SET_LIST_TYPE } from "storage/data/store/dataListActionTypeNames";
import { ListTypes } from "utils/constants";

export type TDataListActions =  TDataListDataAction | TDataListDataLoading | TDataListDataError | TSetListTypeAction;

export type TDataListDataAction = {
    type: typeof SET_DATA_LIST,
    payload: TCard[]
}

export type TDataListDataLoading = {
    type: typeof IS_DATA_LIST_LOADING,
    payload: boolean
}

export type TDataListDataError = {
    type: typeof SET_DATA_LIST_ERROR,
    payload: string
}

export type TSetListTypeAction = {
    type: typeof SET_LIST_TYPE,
    payload: ListTypes
}