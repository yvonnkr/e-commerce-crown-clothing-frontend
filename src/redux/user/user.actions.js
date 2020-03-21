import { SET_CURRENT_USER } from "../action-types";

export const setCurrentUser = user => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: user
  });
};
