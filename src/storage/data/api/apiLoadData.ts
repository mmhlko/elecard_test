import axios, { AxiosError } from "axios";
import { Dispatch } from "react";
import { DATA_URL } from "./constants";
import { AnyAction } from "redux";
import { isDataListLoadingAction, setDataListAction, setDataListErrorAction } from "../store/dataListActions";
import { setCardListAction, setCardListErrorAction } from "modules/card-list/store/cardListActions";
import { TCard } from "modules/card-list/types/cardListTypes";

export const apiLoadData = (dispatch: Dispatch<AnyAction>) => {
    dispatch(isDataListLoadingAction(true))
    return axios
        .get(DATA_URL)
        .then((response) => response.data)
        .then((data: TCard[]) => {
            dispatch(setDataListAction(data))
            dispatch(setCardListAction(data.slice()))
        })
        .catch((error: AxiosError) => {
            dispatch(setDataListErrorAction(error.message))
            dispatch(setCardListErrorAction("Ошибка при загрузке"))
        })
        .finally(() => {
            dispatch(isDataListLoadingAction(false))
        });
};