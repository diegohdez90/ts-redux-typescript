import { combineReducers } from "redux";
import repositoriesReducer from "./repositories";

const reducers = combineReducers({
  repos: repositoriesReducer
});

export default reducers;
