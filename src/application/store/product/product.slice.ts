import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "@/src/domain/entities/product.entity";
import { fetchProducts } from "./product.thunk";

interface ProductsState {
  products: Product[];
  loading: boolean;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loading = false;
      // Handle error
    });
  },
});

export default productsSlice;
