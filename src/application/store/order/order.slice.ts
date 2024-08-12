import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderItem } from "@/src/domain/entities/order.entity";

interface CartState {
  cartItems: OrderItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const orderSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<OrderItem>) => {
      const existingItem = state.cartItems.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeCartItem: (state, action: PayloadAction<OrderItem>) => {
      const existingItem = state.cartItems.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingItem) {
        existingItem.quantity -= action.payload.quantity;
        if (existingItem.quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.product.id !== action.payload.product.id
          );
        }
      }
    },
  },
});

export default orderSlice;
