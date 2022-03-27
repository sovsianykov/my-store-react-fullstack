export const ADD_ORDER = "ADD_ORDER" ;
export const REMOVE_ORDER = "REMOVE_ORDER" ;
export const CLEAN_ORDERS = "CLEAN_ORDERS" ;
export const POST_ORDERS = "POST_ORDERS" ;

export const API_ACTION_FETCH_ORDERS = {
    START: "FETCH_ORDERS_START",
    SUCCESS: "FETCH_ORDERS_SUCCESS",
    FAILURE: "FETCH_ORDERS_FAILURE",
};

export const fetchedOrders ={
    orders: [],
    isLoading: false,
    error: null
}