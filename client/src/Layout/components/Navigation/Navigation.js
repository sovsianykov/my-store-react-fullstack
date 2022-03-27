import React  from "react";
import styles from "./Navigation.module.scss";
import { NavigationItem } from "./NavigationItem";
import { navItems } from "../../constants";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {navItems.map((item) => (
        <NavigationItem item={item} key={item.id} />
      ))}
    </nav>
  );
};
