import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "@/src/application/store/product/product.reducer";
import { OrderReducer } from "@/src/application/store/order/order.reducer";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    orders: OrderReducer, // CartReducer
  },
});
