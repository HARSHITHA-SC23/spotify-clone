import { combineReducers } from "redux";
import userDataReducer from "./user/userReducer";

export const rootReducer = combineReducers({
    userData: userDataReducer,
});

export default rootReducer;
