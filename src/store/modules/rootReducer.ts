// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from "@reduxjs/toolkit";
import filmsSlice from "./filmsSlice";
import peopleSlice from "./peopleSlice";
import planetsSlice from "./planetsSlice";

export default combineReducers({
  films: filmsSlice,
  people: peopleSlice,
  plantets: planetsSlice,
});
