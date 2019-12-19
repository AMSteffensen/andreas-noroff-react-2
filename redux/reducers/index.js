import { combineReducers } from "redux";
import buttonReducer from "./buttonReducer";

const rootReducer = combineReducers({
	button: buttonReducer
});

export default rootReducer;
