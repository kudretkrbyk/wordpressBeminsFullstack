import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    updateCartItem: (state, action) => {
      const { id, quantity, selectedColor, selectedSize } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity || existingItem.quantity;
        existingItem.selectedColor =
          selectedColor || existingItem.selectedColor;
        existingItem.selectedSize = selectedSize || existingItem.selectedSize;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;
