// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from '@reduxjs/toolkit';
import filmsReducer from './filmsSlice';
import peopleSlice from './peopleSlice';

export default combineReducers({
  films: filmsReducer,
  people: peopleSlice,
});
