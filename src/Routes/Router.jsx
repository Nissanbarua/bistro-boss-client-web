import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menus from "../Pages/MenuPage/Menus/Menus";
import OrderPage from "../Pages/OrderPage/OrderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menus></Menus>,
      },
      {
        path: "/order",
        element: <OrderPage></OrderPage>,
      },
    ],
  },
]);
