import { catConstants } from "../_constants";

let newState;

export function cats(state = {}, action) {
  newState = { ...state };
  switch (action.type) {
    case catConstants.LIST_REQUEST:
      newState.loading = true;
      return newState;

    case catConstants.LIST_SUCCESS:
      newState.loading = false;
      newState.data = action.data;
      return newState;

    case catConstants.LIST_FAILURE:
      return action.error;

    case catConstants.LIST_SUCCESS_MORE:
      newState.loading = false;
      newState.data = newState.data.concat(action.data);
      return newState;

    default:
      return newState;
  }
}
