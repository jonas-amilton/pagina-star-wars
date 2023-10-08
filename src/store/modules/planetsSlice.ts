import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { RootState } from "../index";
import { doGet } from "../../api";

export interface PlanetType {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: any;
  films: any;
  created: string;
  edited: string;
}

const adapter = createEntityAdapter<PlanetType>({
  selectId: (item) => item.name,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: RootState) => state.plantets
);

export const getAllPlanets = createAsyncThunk("planets/getAll", async () => {
  const response = await doGet("/planets/");

  return response.results;
});

const planetsSlice = createSlice({
  name: "planets",
  initialState: adapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPlanets.fulfilled, (state, action) => {
      adapter.setAll(state, action.payload);
    });
  },
});

export default planetsSlice.reducer;
