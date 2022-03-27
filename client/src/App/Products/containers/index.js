import React, { memo } from "react";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import  Product  from "@/shared/components/Product";
import { productsSelector } from "../store/productsSelector";
import Paginator from "@/shared/components/Paginator";
import { v4 as uuid } from "uuid";

const Products = () => {
  const { houses, isLoading, error, totalProducts } = useSelector(productsSelector);
  return (
    <section className={styles.products}>
      <Paginator itemsPerPage={8} totalProducts={totalProducts} />
      {isLoading && error ? (
        <h5>Loading...</h5>
      ) : (
        houses.map((house) => (
          <div className={styles.product} key={uuid()}>
            <Product house={house} />
          </div>
        ))
      )}
    </section>
  );
};

export default memo(Products);
