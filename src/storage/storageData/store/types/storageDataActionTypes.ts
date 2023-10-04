import { ListTypes } from "utils/constants";
import { RESET_DELETED_CARDS, SET_DELETED_CARD } from "../storageDataActionTypeNames";

export type TStorageDataActions =  TSetDeletedCardAction | TResetDeletedCardsAction;

export type TSetDeletedCardAction = {
    type: typeof SET_DELETED_CARD,
    payload: string
}
export type TResetDeletedCardsAction = {
    type: typeof RESET_DELETED_CARDS,
}
