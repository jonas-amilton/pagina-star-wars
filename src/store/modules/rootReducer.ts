// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from '@reduxjs/toolkit';
import filmsReducer from './filmsSlice';

export default combineReducers({
  films: filmsReducer,
});
