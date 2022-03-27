import React from "react";
import { Route, Routes } from "react-router-dom/";
import { appRouter } from "@/App/Routing/appRouter";
import Cart from "@/App/Cart/containers";
import Home from "@/App/Home";
import Products from "@/App/Products/containers";
import Order from "@/App/Order/containers";

export const Routing = () => {
  return (
    <Routes>
      <Route path={appRouter.Home} element={<Home />} />
      <Route path={appRouter.Products} element={<Products />} />
      <Route path={appRouter.Cart} element={<Cart />} />
      {/*<Route path="/about" element={<About />} />*/}
      <Route  path={appRouter.Order} element={<Order />} />
    </Routes>
  );
};
