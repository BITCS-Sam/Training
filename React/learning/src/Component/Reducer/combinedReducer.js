import { combineReducers } from "redux";

import { bankingReducer } from "./bankingReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    banking: bankingReducer,
    auth: authReducer,
})