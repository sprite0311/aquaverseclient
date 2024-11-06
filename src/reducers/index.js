import { combineReducers } from "redux";
import auth from "./auth";
import projects from "./projects";
import conversations from "./conversations"

export const reducers = combineReducers({ auth, projects, conversations })