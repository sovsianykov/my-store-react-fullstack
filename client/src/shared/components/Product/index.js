import React, { memo, useCallback, useMemo } from "react";
import styles from "./index.module.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/App/Cart/store/actions";
import cn from "classnames";
import { cartSelector } from "@/App/Cart/store/cartSelector";

const Product = ({ house }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector(cartSelector);
  const onClickHandler = useCallback(() => {
    dispatch(addToCart(house));
  }, [dispatch, house]);

  const classNames = useMemo(
    () =>
      cn({
        [styles.product]: true,
        [styles.product_active]: cart.includes(house),
      }),
    [cart, house]
  );

  return (
    <section className={classNames}>
      <div className={styles.imgWrapper}>
        <img src={house.img} alt={house.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{house.title}</span>
        <span> {`price:  $${house.price}`}</span>
        <div className={styles.cartPlusIcon} onClick={onClickHandler}>
          <AddShoppingCartIcon className={styles.icon} />
        </div>
      </div>
    </section>
  );
};

export default memo(Product);
