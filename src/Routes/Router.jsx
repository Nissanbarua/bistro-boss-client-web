import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menus from "../Pages/MenuPage/Menus/Menus";
import OrderPage from "../Pages/OrderPage/OrderPage";
import Login from "../Pages/Login/Login";

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
        path: "/order/:category",
        element: <OrderPage></OrderPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
