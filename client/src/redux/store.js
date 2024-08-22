import { configureStore } from "@reduxjs/toolkit";
import cartSlicie from "./slices/cartSlicie";
import favoriteSlice from "./slices/favoriteSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlicie,
    favorites: favoriteSlice,
  },
});

export default store;
