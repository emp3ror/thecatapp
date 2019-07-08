import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";

import { catActions } from "./cats.actions";
import { catConstants } from "../_constants";
import getCategories from "../../_mocks/getcategories";
import getCatList from "../../_mocks/getlists";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("getCategories actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("creates CATEGORY_SUCCESS after successfuly fetching categories", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getCategories
      });
    });

    const expectedActions = [
      { type: catConstants.CATEGORY_REQUEST },
      { type: catConstants.CATEGORY_SUCCESS, data: getCategories }
    ];

    const store = mockStore({ category: {} });

    return store.dispatch(catActions.getCategories()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates CATEGORY_SUCCESS after successfuly fetching categories", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getCatList.response1
      });
    });

    const expectedActions = [
      { type: catConstants.LIST_REQUEST },
      { type: catConstants.LIST_SUCCESS, data: getCatList.response1 }
    ];

    const store = mockStore({ cats: {} });

    return store.dispatch(catActions.getLists()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("load more", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getCatList.response2
      });
    });

    const expectedActions = [
      { type: catConstants.LIST_REQUEST },
      { type: catConstants.LIST_SUCCESS_MORE, data: getCatList.response2 }
    ];

    const store = mockStore({
      cats: {}
    });

    return store.dispatch(catActions.getLists(2, true)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
