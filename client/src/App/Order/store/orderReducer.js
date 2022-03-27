import {
  ADD_ORDER,
  API_ACTION_FETCH_ORDERS,
  CLEAN_ORDERS,
  fetchedOrders,
  REMOVE_ORDER,
} from "@/App/Order/store/constants";


const initialState = {
  orders: [],
  invoices : fetchedOrders,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_ACTION_FETCH_ORDERS.START:
      return {
        ...state,
        invoices: { ...fetchedOrders, isLoading: true },
      };
    case API_ACTION_FETCH_ORDERS.SUCCESS:
      return {
        ...state,
        invoices: { ...fetchedOrders, isLoading: false, orders: action.payload },
      };
    case API_ACTION_FETCH_ORDERS.FAILURE:
      return {
        ...state,

        invoices: { ...fetchedOrders, isLoading: false, error: action.payload },
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case REMOVE_ORDER:
      return;
    case CLEAN_ORDERS:
      return {
        ...state,
        orders: [],
      };
    default:
      return state;
  }
};
