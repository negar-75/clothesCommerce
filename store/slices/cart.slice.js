import { createSlice } from "@reduxjs/toolkit"; // this is account reducer
import toast from "react-hot-toast";

const initialState = {
  carts: {},
  items: [],
};

const cartSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (action.payload.id) {
        if (state.carts.hasOwnProperty(action.payload.id)) {
          const itemExists = state.carts[action.payload.id].find(
            (item) => item.id === action.payload.item.id
          );
          if (itemExists) {
            itemExists.quantity++;
          } else {
            state.carts[action.payload.id].push({
              ...action.payload.item,
              quantity: 1,
            });
          }
          toast(`${action.payload.item.title} added`);
        } else {
          state.carts[action.payload.id] = [
            {
              ...action.payload.item,
              quantity: 1,
            },
          ];
          toast(`${action.payload.item.title} added`);
        }
      } else {
        const itemExists = state.items.find(
          (item) => item.id === action.payload.item.id
        );

        if (itemExists) {
          itemExists.quantity++;
        } else {
          state.items.push({
            ...action.payload.item,
            quantity: 1,
          });
        }
        toast(`${action.payload.item.title} added`);
      }
    },
    incrementQuantity: (state, action) => {
      if (action.payload.clientId) {
        const item = state.carts[action.payload.clientId].find(
          (item) => item.id === action.payload.id
        );
        item.quantity++;
      } else {
        const item = state.items.find((item) => item.id === action.payload.id);

        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      if (action.payload.clientId) {
        const item = state.carts[action.payload.clientId].find(
          (item) => item.id === action.payload.id
        );
        if (item.quantity === 1) {
          const index = state.carts[action.payload.clientId].findIndex(
            (item) => item.id === action.payload.id
          );
          state.carts[action.payload.clientId].splice(index, 1);
        } else {
          item.quantity--;
        }
      } else {
        const item = state.items.find((item) => item.id === action.payload.id);
        if (item.quantity === 1) {
          const index = state.items.findIndex(
            (item) => item.id === action.payload.id
          );
          state.items.splice(index, 1);
        } else {
          item.quantity--;
        }
      }
    },
    removeFromCart: (state, action) => {
      if (action.payload.clientId) {
        const index = state.carts[action.payload.clientId].findIndex(
          (item) => item.id === action.payload.id
        );
        state.carts[action.payload.clientId].splice(index, 1);
      } else {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      }
    },

    clearCart: (state, action) => {
      if (action.payload.clientId) {
        return {
          ...state,
          carts: {
            ...state.carts,
            [action.payload.clientId]: [],
          },
        };
      } else {
        return {
          ...state,
          items: [],
        };
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
