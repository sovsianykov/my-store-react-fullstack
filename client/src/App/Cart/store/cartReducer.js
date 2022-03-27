import { ADD_TO_CART, CLEAN_CART, REMOVE_FROM_CART } from "./constants";

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      const newCart = state.cart.filter(
        (h) => h.cartId === action.payload.cartId
      );
      newCart.length--;

      return {
        ...state,
        cart: state.cart
          .filter((h) => h.cartId !== action.payload.cartId)
          .concat(newCart),
      };
    case CLEAN_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
