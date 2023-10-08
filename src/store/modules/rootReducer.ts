// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from "@reduxjs/toolkit";
import filmsReducer from "./filmsSlice";
import peopleSlice from "./peopleSlice";
import planetsSlice from "./planetsSlice";

export default combineReducers({
  films: filmsReducer,
  people: peopleSlice,
  plantets: planetsSlice,
});
