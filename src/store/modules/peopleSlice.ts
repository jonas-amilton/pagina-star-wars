import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { RootState } from "../index";
import { doGet } from "../../api";

export interface PersonType {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: any;
  species: any;
  starships: any;
  vehicles: any;
  url: string;
  created: string;
  edited: string;
}

const adapter = createEntityAdapter<PersonType>({
  selectId: (item) => item.name,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: RootState) => state.people
);

export const getAllPeoples = createAsyncThunk("people/getAll", async () => {
  const response = await doGet("/people/");

  return response.results as PersonType[];
});

const peopleSlice = createSlice({
  name: "people",
  initialState: adapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPeoples.fulfilled, (state, action) => {
      console.log(action);
      const resultadoFinal = action.payload.map((item) => ({
        ...item,
        label: item.name,
      }));
      adapter.setAll(state, resultadoFinal);
    });
  },
});
export default peopleSlice.reducer;
