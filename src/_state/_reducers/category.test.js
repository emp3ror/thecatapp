import { category } from "./category.reducers";
import { catConstants } from "../_constants";
import getCategories from "../../_mocks/getcategories";

describe("category reducer", () => {
  it("should return the initial state", () => {
    expect(category(undefined, {})).toEqual({});
  });
  it("should handle CATEGORY_REQUEST", () => {
    const startAction = {
      type: catConstants.CATEGORY_REQUEST
    };
    expect(category({}, startAction)).toEqual({ loading: true });
  });
  it("should handle CATEGORY_SUCCESS", () => {
    const updateAction = {
      type: catConstants.CATEGORY_SUCCESS,
      data: getCategories
    };
    expect(category({}, updateAction)).toEqual({
      loading: false,
      data: getCategories
    });
  });
  it("should handle GET_CATEGORY_FAIL", () => {
    const errMsg = { success: false };
    const failAction = {
      type: catConstants.CATEGORY_FAILURE,
      error: errMsg
    };
    expect(category({}, failAction)).toEqual(errMsg);
  });
});
