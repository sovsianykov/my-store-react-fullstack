import React, {memo, useCallback} from "react";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/actions";
import { AddTwoTone, Remove } from "@mui/icons-material";

 const CartProduct = ({ house }) => {
  const dispatch = useDispatch();

  const onAddClickHandler = useCallback(() => {
    dispatch(addToCart(house));
  }, [dispatch, house]);

  const onRemoveClickHandler = useCallback(() => {
    dispatch(removeFromCart(house));
  }, [dispatch, house]);

  return (
    <section className={styles.product}>
      <div className={styles.imgWrapper}>
        <img src={house.img} alt={house.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{house.title}</span>
        <span> {`price:  $${house.price}`}</span>

        <div className={styles.cartPlusIcon} onClick={onRemoveClickHandler}>
          <Remove className={styles.icon} />
        </div>
        <span> {`${house.quantity}`}</span>
        <div className={styles.cartPlusIcon} onClick={onAddClickHandler}>
          <AddTwoTone className={styles.icon} />
        </div>
      </div>
    </section>
  );
};
export default memo(CartProduct)