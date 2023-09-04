import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from "axios";
import { Product } from '../types/ProductsTypes';


const initialState:Product[] = []

export const fetchProducts = createAsyncThunk<Product[],undefined>(
  'products/fetchProducts',
  async () => {
      const response = await axios.get('https://dummyjson.com/products'
      )
      return response.data.products
  }
)

  
export const productsSlice = createSlice({
  name:'products',
  initialState,
  reducers:{},
  extraReducers(builder) {
      builder
      .addCase(fetchProducts.fulfilled,(state,action) => {
          return (state = action.payload)
      })
  },
})


export default productsSlice.reducer