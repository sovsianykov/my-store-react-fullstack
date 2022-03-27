import { createSelector } from "reselect";

export const cartSelector = createSelector(
  [
    (state) => state.cartReducer.cart,
    (state) => state.housesReducer.data.houses,
  ],
  (cart, houses) => {
    let sortedCart = [];
    for (let i = 0; i < houses.length; i++) {
      const currentQ = cart.filter((h) => h.id === i).length;
      const currentItem = {
        ...cart.filter((h) => h.id === i)[0],
        quantity: currentQ
      };
      if (currentQ) {
        sortedCart.push(currentItem);
      }
    }

    const totalAmount = cart.reduce((acc, product) => acc + product.price, 0);
    return {
      cart,
      totalAmount,
      sortedCart,
    };
  }
);
