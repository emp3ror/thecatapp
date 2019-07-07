import { catConstants } from "../_constants";

export function category(state = {}, action) {
  switch (action.type) {
    case catConstants.CATEGORY_REQUEST:
      return {
        loading: true
      };
    case catConstants.CATEGORY_SUCCESS:
      let newState = { ...state };
      newState.loading = false;
      newState.data = action.data;
      return newState;
    case catConstants.CATEGORY_FAILURE:
      return action.error;
    default:
      return { ...state };
  }
}
