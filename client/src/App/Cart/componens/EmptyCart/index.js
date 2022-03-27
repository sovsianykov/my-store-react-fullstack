import React from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import { appRouter } from "@/App/Routing/appRouter";
import Button from "@/shared/components/Button";

export const EmptyCart = () => {
  return (
    <section className={styles.cart}>
      <h1 className={styles.title}>There's no items</h1>
      <NavLink to={appRouter.Products}>
        <Button>Please, order something!</Button>
      </NavLink>
    </section>
  );
};
