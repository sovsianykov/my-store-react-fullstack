import { applyMiddleware, combineReducers, createStore } from "redux";
import { housesReducer } from "@/App/Products/store/housesReducer";
import { cartReducer } from "@/App/Cart/store/cartReducer";
import thunk from "redux-thunk";
import { orderReducer } from "@/App/Order/store/orderReducer";

const rootReducer = combineReducers({
  housesReducer: housesReducer,
  cartReducer: cartReducer,
  orderReducer: orderReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
