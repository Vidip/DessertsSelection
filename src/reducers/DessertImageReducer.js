import { ActionTypes } from "../constants/action-types";

// Initial State
const initialState = {
  desserts: [],
};

// Reducer to modify desserts state
export const dessertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DESERTS:
      return { ...state, desserts: payload }
    case ActionTypes.CLEAR_LIST:
      return { ...state, desserts: [] }
    case ActionTypes.INSERT_ITEM:
        return { ...state, desserts: [...state.desserts, payload] };
    default:
      return state;
  }
};