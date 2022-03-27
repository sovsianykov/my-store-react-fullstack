import React from "react";
import styles from "./Header.module.scss";
import {
  AppBar,
  BrandLogo,
  CartIcon,
  Navigation,
} from "../Navigation";

export const Header = () => {
  return (
    <nav className={styles.header}>
      <AppBar>
        <BrandLogo />
        <Navigation />
        <CartIcon />
      </AppBar>
    </nav>
  );
};
