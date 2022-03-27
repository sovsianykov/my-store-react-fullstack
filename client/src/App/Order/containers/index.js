import React, { memo, useCallback, useState } from "react";
import styles from "../index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "@/App/Cart/store/cartSelector";
import OrderItem from "@/App/Order/components/OrderItem";
import Button from "@/shared/components/Button";
import { postOrder, resetOrders } from "@/App/Order/store/actions";
import { cleanCart } from "@/App/Cart/store/actions";
import { initialOrder } from "@/App/Order/constants";
import { ordersSelector } from "@/App/Order/store/ordersSelector";
import { useFetchOrders } from "@/hooks/useFetch";

const Order = () => {
  useFetchOrders();
  console.log(useSelector(ordersSelector));

  const { sortedCart, totalAmount } = useSelector(cartSelector);
  const [order, setOrder] = useState(initialOrder);

  const onChangeHandler = useCallback(
    (e) => {
      const newOrder = {
        ...order,
        [e.target.name]: e.target.value,
        cart: sortedCart,
        totalAmount: totalAmount,
      };

      setOrder(newOrder);
    },
    [order, sortedCart, totalAmount]
  );

  const dispatch = useDispatch();

  const onSubmitHandler = useCallback(() => {
    dispatch(postOrder(order));
  }, [dispatch, order]);

  const onResetHandler = useCallback(() => {
    setOrder(initialOrder);
    dispatch(resetOrders());
    dispatch(cleanCart());
  }, [dispatch]);

  return (
    <main className={styles.container}>
      <h4 className={styles.orderTitle}>Your order is</h4>
      <form className={styles.order}>
        <label htmlFor="name">Name:</label>
        <input
          value={order.name}
          onChange={onChangeHandler}
          type="text"
          id="name"
          name="name"
        />

        <label htmlFor="lastName">Last name:</label>
        <input
          value={order.lastName}
          onChange={onChangeHandler}
          type="text"
          id="lastName"
          name="lastName"
        />

        <label htmlFor="email">E-mail:</label>
        <input
          value={order.email}
          onChange={onChangeHandler}
          type="email"
          id="email"
          name="email"
        />
        {sortedCart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </form>
      <div className={styles.totalAmount}>
        <h3>{`Total amount $${totalAmount}`}</h3>
        <section className={styles.btnBlock}>
          <Button onClick={onSubmitHandler}> send order</Button>
          <Button onClick={onResetHandler}> reset orders </Button>
        </section>
      </div>
    </main>
  );
};

export default memo(Order);
