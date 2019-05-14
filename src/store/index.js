import { createStore } from "redux";
import { reducer } from "../reducers/";

const persistedState = localStorage.getItem("gitPlay")
  ? JSON.parse(localStorage.getItem("gitPlay"))
  : {};
export let store = createStore(reducer, persistedState);
