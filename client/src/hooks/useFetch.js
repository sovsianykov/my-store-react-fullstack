import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchHouses } from "@/App/Products/store/actions";
import { fetchOrders } from "@/App/Order/store/actions";

export const useFetch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);
};
export const useFetchOrders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
};
