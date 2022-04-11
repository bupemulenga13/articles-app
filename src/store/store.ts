import { createStore, combineReducers, applyMiddleware, Store } from "redux"
import thunk, { ThunkMiddleware } from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { articleReducer } from "./reducer";
import { ArticleActionTypes } from "./actionTypes";

export type AppActions = ArticleActionTypes

const persistConfig = {
    key: "articles_app",
    storage,
}

const rootReducer = combineReducers({
    articles: articleReducer
})

export type AppState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk as ThunkMiddleware<AppState, AppActions>];

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store)

