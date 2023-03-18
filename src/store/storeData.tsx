import { createStore } from "redux";
import rootReducer from "../combineReducer/rootReducer";

export const store = createStore(rootReducer);
