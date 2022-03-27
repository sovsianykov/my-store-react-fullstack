import React, { useMemo } from "react";
import styles from "./Navigation.module.scss";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

export const NavigationItem = ({ item }) => {
  const location = useLocation();

  const classNames = useMemo(
    () =>
      cn({
        [styles.navItem]: true,
        [styles.navItem_active]: location.pathname === item.path,
      }),
    [item.path, location.pathname]
  );
  return (
    <Link to={item.path} className={classNames}>
      {item.label}
    </Link>
  );
};
