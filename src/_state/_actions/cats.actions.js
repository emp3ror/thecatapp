import { catConstants } from "../_constants";
import { theCatService } from "../../_service";

export const catActions = {
  getCategories,
  getLists
};

function getCategories() {
  return dispatch => {
    dispatch(request());

    return theCatService
      .getCategories()
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(err => {
        dispatch(failure(err.toString()));
      });
  };

  function request() {
    return { type: catConstants.CATEGORY_REQUEST };
  }

  function success(data) {
    return { type: catConstants.CATEGORY_SUCCESS, data };
  }

  function failure(err) {
    return { type: catConstants.CATEGORY_FAILURE, err };
  }
}

function getLists(page = 1, more = false) {
  return dispatch => {
    dispatch(request());

    return theCatService
      .getList()
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(err => {
        dispatch(failure(err.toString()));
      });
  };

  function request() {
    return { type: catConstants.LIST_REQUEST };
  }

  function success(data) {
    let successmsg = more
      ? catConstants.LIST_SUCCESS_MORE
      : catConstants.LIST_SUCCESS;
    return { type: successmsg, data };
  }

  function failure(err) {
    return { type: catConstants.LIST_FAILURE, err };
  }
}
