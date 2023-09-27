import axios, { AxiosError } from "axios";
import { Dispatch } from "react";
import { DATA_URL } from "./constants";
import { AnyAction } from "redux";
import { isCardListLoadingAction, setCardListAction, setCardListErrorAction } from "modules/card-list";

export const apiLoadCardList = (dispatch: Dispatch<AnyAction>) => {
    dispatch(isCardListLoadingAction(true))
    axios
        .get(DATA_URL)
        .then((response) => {
            dispatch(setCardListAction(response.data))
        })
        .catch((error: AxiosError) => {
            dispatch(setCardListErrorAction(error.message))
        })
        .finally(() => {
            dispatch(isCardListLoadingAction(false))
        });
};