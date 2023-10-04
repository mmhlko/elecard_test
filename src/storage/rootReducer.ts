import { cardListReducer } from "modules/card-list/store/cardListReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { dataListReducer } from "./data/store/dataListReducer";
import { storageDataReducer } from "./storageData/store/storageDataReducer";

const persistConfig = {
    key: "storageData",
    storage: storage
}
const persistedStorageDataReducer = persistReducer(persistConfig, storageDataReducer);

export const rootReducer = combineReducers({
    cardList: cardListReducer,
    dataList: dataListReducer,
    storageData: persistedStorageDataReducer
})