import React from "react";
import styles from "./Navigation.module.scss";
import logo from "../../../@assests/img/logo.png";
import { Link } from "react-router-dom";
import { appRouter } from "@/App/Routing/appRouter";

export const BrandLogo = () => {
  return (
    <Link to={appRouter.Home} className={styles.brandLogo}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <h1 className={styles.title}>Dreams Houses</h1>
    </Link>
  );
};
