import { cardListReducer } from "modules/card-list/store/cardListReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "cardList",
    storage: storage,
    blacklist: ["loading", "errorState"]
}

const persistedCardListReducer = persistReducer(persistConfig, cardListReducer);

export const rootReducer = combineReducers({
    cardList: persistedCardListReducer,
})