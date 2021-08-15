import { combineReducers } from "redux";
import { dessertReducer, createDessertReducer} from "./DessertImageReducer";

// Combining All Reducers to one Reducer
const reducers = combineReducers({
  allDesserts: dessertReducer,
});

export default reducers;
