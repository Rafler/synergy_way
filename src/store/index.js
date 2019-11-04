import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import {saveState, loadState} from "./localStorage";

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, persistedState, composeEnhancers(
    applyMiddleware(thunk)
));

store.subscribe(() => {
    saveState({
        basket: store.getState().basket,
        cards: store.getState().cards,
    });
});
