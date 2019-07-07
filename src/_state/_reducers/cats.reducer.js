import { catConstants } from "../_constants";

export function cats(state = {}, action) {
  switch (action.type) {
    case catConstants.LIST_REQUEST:
      return {
        loading: true
      };
    case catConstants.LIST_SUCCESS:
      let newState = { ...state };
      newState.loading = false;
      newState.data = action.data;
      return newState;
    case catConstants.LIST_FAILURE:
      return action.error;
    default:
      return {};
  }
}
