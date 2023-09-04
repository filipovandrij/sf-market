

import { createSlice } from '@reduxjs/toolkit';
import { NewProduct } from '../types/ProductsTypes';


const initialState: NewProduct[] = [];

const newProductsSlice = createSlice({
  name: 'newProducts',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const index = state.findIndex((product) => product.id === id);
      if (index !== -1) {
        state[index] = updatedProduct;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct } = newProductsSlice.actions;

export default newProductsSlice.reducer;
