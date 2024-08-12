import { ProductRepositoryImpl } from "@/src/domain/repositories/productImpl.respository";
import { AxiosHttpClient } from "@/src/infrastructure/api/axios-httpclient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const productRepository = new ProductRepositoryImpl(
      new AxiosHttpClient("http://10.0.2.2:3000")
    );
    return await productRepository.getProducts();
  }
);
