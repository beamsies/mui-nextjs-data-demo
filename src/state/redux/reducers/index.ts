import { combineReducers } from "redux";
import chartsReducer from "./chartsReducer";

const rootReducer: any = combineReducers({
  chartsReducer,
});

export default rootReducer;
