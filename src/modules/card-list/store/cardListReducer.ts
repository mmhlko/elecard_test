import { TSpotsActions } from "modules/card-list/store/types/cardListActionTypes";
import { TCardListState } from "./types/cardListReducerTypes";
import { DELETE_CARDLIST_ITEM, IS_CARDLIST_LOADING, SET_CARDLIST, SET_CARDLIST_ERROR, SET_CURRENT_SORT } from "./cardListActionTypeNames";
import { TABS_ID } from "../types/cardListTypes";
import { cardListSort } from "../helpers/getSortStringValue";

const initialState: TCardListState = {
    data: null,
    loading: false,
    errorState: null,
    total: null,
    currentSort: null,
};

export function cardListReducer(state = initialState, action: TSpotsActions) {

    switch (action.type) {
        case SET_CARDLIST:
            return { ...state, data: action.payload, total: action.payload.length }
        case SET_CARDLIST_ERROR:
            return { ...state, errorState: action.payload }
        case IS_CARDLIST_LOADING:
            return { ...state, loading: action.payload }
        case SET_CURRENT_SORT:
            switch (action.payload) {
                case TABS_ID.DATE:
                    return { ...state, data: state.data.sort((a, b) => cardListSort(a, b, TABS_ID.DATE)) }
                case TABS_ID.FILE_SIZE:
                    return { ...state, data: state.data.sort((a, b) => cardListSort(a, b, TABS_ID.FILE_SIZE)) }
                case TABS_ID.CATEGORY:
                    return { ...state, data: state.data.sort((a, b) => cardListSort(a, b, TABS_ID.CATEGORY)) }
                case TABS_ID.FILE_NAMES:
                    return { ...state, data: state.data.sort((a, b) => cardListSort(a, b, TABS_ID.FILE_NAMES)) }
                default:
                    break;
            }
            break;
        case DELETE_CARDLIST_ITEM:
            return { ...state, data: state.data.filter((item) => item.image !== action.payload), total: state.total - 1}
        default:
            return state
    }
}