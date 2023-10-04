import { TDataListState } from "./types/dataListReducerTypes";
import { IS_DATA_LIST_LOADING, SET_DATA_LIST, SET_DATA_LIST_ERROR, SET_LIST_TYPE } from "./dataListActionTypeNames";
import { TDataListActions } from "./types/dataListActionTypes";
import { ListTypes } from "utils/constants";

const initialState: TDataListState = {
    data: null,
    loading: false,
    errorState: null,
    total: null,
    listType: ListTypes.cardList
};

export function dataListReducer(state = initialState, action: TDataListActions) {

    switch (action.type) {
        case SET_DATA_LIST:
            return { ...state, data: action.payload, total: action.payload.length }
        case IS_DATA_LIST_LOADING:
            return { ...state, loading: action.payload }
        case SET_DATA_LIST_ERROR:
            return { ...state, errorState: action.payload }
            case SET_LIST_TYPE:
                return { ...state, listType: action.payload }
        default:
            return state
    }
}