import { v4 as uuid } from "uuid";
import {
  ADD_ORDER,
  API_ACTION_FETCH_ORDERS,
  CLEAN_ORDERS,
} from "@/App/Order/store/constants";
import httpService from "@/httpService";
import axios from "axios";

export function addOrder(order) {
  return (dispatch) => {
    order.id = uuid();
    dispatch({
      type: ADD_ORDER,
      payload: order,
    });
  };
}
export function postOrder(order) {
  order.id = uuid();
  return async (dispatch) => {
    await httpService.post("/orders", order, dispatch);
  };
}
export function resetOrders() {
  return (dispatch) => {
    dispatch({
      type: CLEAN_ORDERS,
    });
  };
}
const fetchStart = () => ({
  type: API_ACTION_FETCH_ORDERS.START,
});

export function fetchOrders() {
  return async (dispatch) => {
    try {
      fetchStart();
  const response  =  await axios.get("http://localhost:3004/orders");
    await  console.log(response.data)
    await dispatch({
      type: API_ACTION_FETCH_ORDERS.SUCCESS,
      payload: response.data,
    })
    } catch (e) {
      dispatch({
        type: API_ACTION_FETCH_ORDERS.FAILURE,
        payload: e.message,
      });
    }
  };
}
