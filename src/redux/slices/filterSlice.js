import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortType: 'rating',
  filteredPizzas: [],
  currentPage: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilteredPizzas: (state, action) => {
      state.filteredPizzas = action.payload;
    },
  },
});

export const { setCategory, setSortType, setCurrentPage, setFilteredPizzas } = filterSlice.actions;

export const selectFilteredPizzas = (state) => state.filter.filteredPizzas;
export const selectCurrentPage = (state) => state.filter.currentPage;

export default filterSlice.reducer;
