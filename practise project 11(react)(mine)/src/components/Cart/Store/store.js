import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartItems = [];
const cartInitialState = {
  cartItemList: cartItems,
  showCart: true,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: cartInitialState,
  reducers: {
    increment(state, action) {
      const index = state.cartItemList.findIndex(
        (item) => item.title === action.payload
      );
      state.cartItemList[index].quantity++;
    },

    decrement(state, action) {
      const index = state.cartItemList.findIndex(
        (item) => item.title === action.payload
      );
      state.cartItemList[index].quantity--;
      if (state.cartItemList[index].quantity == 0) {
        state.cartItemList.splice(index, 1);
      }
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },

    updateCart(state, action) {
      const index = state.cartItemList.findIndex(
        (item) => item.title === action.payload.title
      );
      if (index == -1) { 
        state.cartItemList.push(action.payload);
      } else {
        state.cartItemList[index].quantity++;
      }
    },
  },
});

const Product = [
  { title: "Chinese", price: 30, description: "first product" },
  { title: "American", price: 20, description: "second product" },
  { title: "Pakistani", price: 10, description: "third product" },
  { title: "Japanese", price: 50, description: "first product" },
  { title: "Aussy", price: 70, description: "second product" },
  { title: "Canadian", price: 40, description: "third product" }
];

const productInitialState = { itemList: Product };

const productSlice = createSlice({
  name: "Product",
  initialState: productInitialState,
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer, product: productSlice.reducer },
});

export const cartActions = cartSlice.actions;
export const productActions = productSlice.actions;
export default store;
