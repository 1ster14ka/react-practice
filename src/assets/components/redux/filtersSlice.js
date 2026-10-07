import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    status: "all",
    name: "",
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setStatusFilter, changeFilter } = slice.actions;
export default slice.reducer;

export const filterSelect = (state) => state.filters.name;
