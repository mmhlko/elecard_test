import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore,  } from "redux-persist"

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
export const persistor = persistStore(store)