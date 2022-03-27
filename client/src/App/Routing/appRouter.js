export const appRouter = {
    Home : "/",
    Products : "/products",
    About: "/about",
    Cart: "/cart",
    Order: "/order"
}

export const mapRoutes = new Map([
           [appRouter.Home ,"/"  ],
           [appRouter.Products ,"/products"  ],
           [appRouter.About ,"/about"  ],
           [appRouter.Cart ,"/cart"  ],
           [appRouter.Order ,"/order"  ],
        ])