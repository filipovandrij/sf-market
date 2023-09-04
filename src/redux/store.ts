import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import newProductsSlice from './newProductsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer, 
    newProducts: newProductsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch