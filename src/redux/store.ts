import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer, // Подключаем срез products
    // Другие срезы, если они есть
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch