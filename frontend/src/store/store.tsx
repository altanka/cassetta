import { createStore } from "redux";
import { playerReducer } from "./reducers";

export const store = createStore(playerReducer);