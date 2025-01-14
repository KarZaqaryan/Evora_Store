import logo from './logo.svg';
import './assets/css/styles.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { MainLoader } from "./pages/home";
import MainLayout from "./layout/mainLayout";
import Shop, { ShopLoader } from "./pages/shop";
import SingleCard from "./pages/singleCard";
import MyAccount from "./pages/myAccount";
import Login from "./pages/login";
import Cart from "./pages/cart";
import Favorite from "./pages/favorite";
import Compare from "./pages/compare";
import Checkout from "./pages/checkout";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: MainLoader,
        },
        {
          path: "shop",
          element: <Shop />,
          loader: ShopLoader,
        },
        {
          path: "shop/:page",
          element: <Shop />,
          loader: ShopLoader,
        },
        {
          path: "catalog/:productId", // Route for card details
          element: <SingleCard />,
          loader: ShopLoader,
        },
        {
          path: "myaccount", // Changed to lowercase
          element: <MyAccount />,
          children: [
            {
              index: true,
              element: <MyAccount />,
            },

          ]
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'cart',
          element: <Cart/>
        },
        {
          path: 'favorite',
          element: <Favorite/>
        },
        {
          path: 'compare',
          element: <Compare/>
        },
        {
          path: 'checkout',
          element: <Checkout/>
        }
      ],
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
