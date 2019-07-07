import { combineReducers } from "redux";

import { cats } from "./cats.reducer";
import { category } from "./category.reducers";

const rootReducer = combineReducers({
  cats,
  category
});

export default rootReducer;
