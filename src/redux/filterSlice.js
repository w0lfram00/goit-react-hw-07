import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filterSlice",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export const selectNameFilter = (state) => state.filter.name;
export default slice.reducer;
