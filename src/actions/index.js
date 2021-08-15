import { ActionTypes } from "../constants/action-types";
import { retrieveDesserts, createCall} from "../api/index";

// Fetch All Desserts Action
export const fetchAllDesserts = () => async (dispatch) => {
  const response = await retrieveDesserts();
  dispatch({
    type: ActionTypes.FETCH_DESERTS,
    payload: response.data,
  });
};

// Create new item action
export const createDessert = (request) => async (dispatch) => {
  const response = await createCall(request);
  dispatch({
    type: ActionTypes.INSERT_ITEM,
    payload: request,
  });
};


// Clear list of desserts
export const clearDessert = ()  => {
  return {
    type: ActionTypes.CLEAR_LIST,
    payload: {}
  };
};
