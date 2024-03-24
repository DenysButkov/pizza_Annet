import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../redux/slices/filterSlice';
import cart from './slices/cartSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart,
  },
});

export default store;
