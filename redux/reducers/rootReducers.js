import { combineReducers } from "redux";
import PostReducers from "./Post";

export const rootReducer=combineReducers({
    posts:PostReducers,
})