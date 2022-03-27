import React from "react";
import styles from "./Navigation.module.scss";

export const AppBar = ({children}) => {
  return (
    <div className={styles.appBar}>
      {children}
    </div>
  );
};
