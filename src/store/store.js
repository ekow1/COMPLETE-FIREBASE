import { createStore, combineReducers } from "redux";
import ContactReducers from "../reducers/ContactReducers";
import AuthReducer from "../reducers/AuthReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

let reducers = combineReducers({ ContactReducers, AuthReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer);

let persistor = persistStore(store);

export { store, persistor };
