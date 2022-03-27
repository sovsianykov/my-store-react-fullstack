import { createSelector } from "reselect";

export const ordersSelector = createSelector(
  (state) => state.orderReducer.invoices,
  ({ orders, isLoading, error }) => {
    return {
      orders,
      isLoading,
      error,
    };
  }
);
