import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { getFimls } from '../../api';

export interface FilmType {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: any;
  species: any;
  starships: any;
  vehicles: any;
  characters: any;
  planets: any;
  url: string;
  created: string;
  edited: string;
}

const adapter = createEntityAdapter<FilmType>({
  selectId: (item) => item.episode_id,
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.films);

export const getAllFilms = createAsyncThunk('films/getAll', async () => {
  const response = await getFimls();

  return response.results;
});

const filmsSlice = createSlice({
  name: 'films',
  initialState: adapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllFilms.fulfilled, (state, action) => {
      adapter.setAll(state, action.payload);
    });
  },
});
export default filmsSlice.reducer;
