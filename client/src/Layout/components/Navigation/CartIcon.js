import React from "react";
import styles from "./Navigation.module.scss";
import { ShoppingCartRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";
import {cartSelector} from "@/App/Cart/store/cartSelector";
import {Link} from "react-router-dom";
import {appRouter} from "@/App/Routing/appRouter";

export const CartIcon = () => {
  const count = useSelector(cartSelector).cart.length;
  return (
    <Link to={appRouter.Cart} className={styles.cartPlusIcon}>
      <ShoppingCartRounded className={styles.icon} />
      {count ? <div className={styles.itemsCount}>{count}</div> : ""}
    </Link>
  );
};
