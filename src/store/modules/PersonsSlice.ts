import { createSlice } from "@reduxjs/toolkit";

const Person = createSlice({
  name: "person",
  initialState: {},
  reducers: {
    setPerson: (state, action) => action.payload,
  },
});
export default Person.reducer;
