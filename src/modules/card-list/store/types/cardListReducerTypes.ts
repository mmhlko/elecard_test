import { TABS_ID, TCard } from "modules/card-list/types/cardListTypes";

export type TCardListState = {
    data: TCard[],
    errorState: string | null,
    total: number,
    currentSort: TABS_ID,
    startItem: number,
    endItem: number
}