import { createStore } from "redux";
import calReducer from "./calReducer";

const store = createStore(calReducer);

export default store;
