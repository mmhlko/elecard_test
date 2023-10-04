import { TCardListActions } from "modules/card-list/store/types/cardListActionTypes";
import { TCardListState } from "./types/cardListReducerTypes";
import { DELETE_CARDLIST_ITEM, RESET_CARDLIST, SET_CARDLIST, SET_CARDLIST_ERROR, SET_DATA_BY_CURRENT_SORT, SET_START_ITEM } from "./cardListActionTypeNames";
import { TABS_ID } from "../types/cardListTypes";
import { cardListSort } from "../helpers/getSortStringValue";
import { PAGE_SIZE } from "utils/constants";

const initialState: TCardListState = {
    data: null,
    errorState: null,
    total: null,
    currentSort: null,
    startItem: 0,
    endItem: PAGE_SIZE
};

export function cardListReducer(state = initialState, action: TCardListActions) {

    switch (action.type) {
        case SET_CARDLIST:
            return { ...state, data: action.payload, total: action.payload.length, currentSort: null }
        case SET_START_ITEM:
            return { ...state, startItem: action.payload, endItem: action.payload + PAGE_SIZE }
        case SET_CARDLIST_ERROR:
            return { ...state, errorState: action.payload }
        case RESET_CARDLIST:
            return { ...state, data: action.payload, total: action.payload.length }
        case SET_DATA_BY_CURRENT_SORT:
            switch (action.payload) {
                case TABS_ID.DATE:
                    return { ...state, data: state.data.sort((a, b) => cardListSort(a, b, TABS_ID.DATE)), currentSort: action.payload }
                case TABS_ID.FILE_SIZE:
                    return { ...state, data: state.data.sort((a, b) => cardListSort(a, b, TABS_ID.FILE_SIZE)), currentSort: action.payload }
                case TABS_ID.CATEGORY:
                    return { ...state, data: state.data.sort((a, b) => cardListSort(a, b, TABS_ID.CATEGORY)), currentSort: action.payload }
                case TABS_ID.FILE_NAMES:
                    return { ...state, data: state.data.sort((a, b) => cardListSort(a, b, TABS_ID.FILE_NAMES)), currentSort: action.payload }
                default:
                    break;
            }
            break;
        case DELETE_CARDLIST_ITEM:
            return { ...state, data: state.data.filter((item) => item.image !== action.payload), total: state.total - 1 }

        default:
            return state
    }
}