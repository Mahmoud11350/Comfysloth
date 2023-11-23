import { createBrowserRouter } from "react-router-dom";
// import queryClient from "../utils/queryClient";
import {
  About,
  Cart,
  ErrorPage,
  HomeLayout,
  Landing,
  Login,
  Product,
  Products,
  Register,
} from "../pages";

import { loader as featuredLoader } from "../pages/Landing";
import { loader as productLoader } from "../pages/Product";
// import { loader as productsLoader } from "../pages/Products";
import { action as loginAction } from "../pages/Login";
import { action as registerAction } from "../pages/Register";
import { loader as currentUserLoader } from "../pages/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    loader: currentUserLoader,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: featuredLoader,
      },

      {
        path: "products",
        element: <Products />,
        // loader: productsLoader(queryClient),
      },
      {
        path: "product/:id",
        element: <Product />,
        loader: productLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
    ],
  },
]);

export default router;
