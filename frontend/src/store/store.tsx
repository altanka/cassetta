import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { playerReducer } from "./reducers";

export const store = createStore(playerReducer, applyMiddleware(thunk));