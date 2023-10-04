import { TCard } from "modules/card-list/types/cardListTypes";
import { ListTypes } from "utils/constants";

export type TDataListState = {
    data: TCard[],
    loading: boolean,
    errorState: string | null,
    total: number,
    listType: ListTypes
}