import { createSelector } from "reselect";
import {cartSelector} from "../../Cart/store/cartSelector";
const getHouses = (state) => state.housesReducer.data;
const getCurrentPage = (state) => state.housesReducer.currentPage;

export const productsSelector = createSelector(
  [cartSelector, getHouses, getCurrentPage],

  ({cart}, { houses, isLoading, error }, currentPage) => {
    let items = [];
    const totalProducts = houses.length;
    for (const house of houses) {
      if (cart.includes(house)) {
        house.quantity = cart.filter((h) => h.id === house.id).length;
        items.push(house);
      } else {
        items.push(house);
      }
    }
    return {
      houses: items.filter(
        (h) => h.id - 1 >= (currentPage - 1) * 8 && h.id <= currentPage * 8
      ),
      totalProducts,
      isLoading,
      error,
    };
  }
);
