import { cats } from "./cats.reducer";
import { catConstants } from "../_constants";
import getCatList from "../../_mocks/getlists";

describe("cats list reducer", () => {
  it("should return the initial state", () => {
    expect(cats(undefined, {})).toEqual({});
  });
  it("should handle LIST_REQUEST", () => {
    const startAction = {
      type: catConstants.LIST_REQUEST
    };
    expect(cats({}, startAction)).toEqual({ loading: true });
  });
  it("should handle LIST_SUCCESS", () => {
    const updateAction = {
      type: catConstants.LIST_SUCCESS,
      data: getCatList.response1
    };
    expect(cats({}, updateAction)).toEqual({
      loading: false,
      data: getCatList.response1
    });
  });
  it("should handle GET_LIST_FAIL", () => {
    const errMsg = { success: false };
    const failAction = {
      type: catConstants.LIST_FAILURE,
      error: errMsg
    };
    expect(cats({}, failAction)).toEqual(errMsg);
  });
});
