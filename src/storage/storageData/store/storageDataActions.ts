import { SET_DELETED_CARD, RESET_DELETED_CARDS } from "./storageDataActionTypeNames";
import { TResetDeletedCardsAction, TSetDeletedCardAction } from "./types/storageDataActionTypes";

export const setDeletedCardAction = (data: string): TSetDeletedCardAction => {
    return {
        type: SET_DELETED_CARD,
        payload: data,
    }
}
export const resetDeletedCardsAction = (): TResetDeletedCardsAction => {
    return {
        type: RESET_DELETED_CARDS,
    }
}