import { TStorageDataState } from "./types/storageDataReducerTypes";
import { RESET_DELETED_CARDS, SET_DELETED_CARD } from "./storageDataActionTypeNames";
import { TStorageDataActions } from "./types/storageDataActionTypes";

const initialState: TStorageDataState = {
    deletedCards: [],
};

export function storageDataReducer(state = initialState, action: TStorageDataActions) {

    switch (action.type) {
        case SET_DELETED_CARD:
            return { ...state, deletedCards: [...state.deletedCards, action.payload] }
        case RESET_DELETED_CARDS:
            return { ...state, deletedCards: [] }
        default:
            return state
    }
}