import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import CartPage from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail";
import "./index.css";
import ProductList from "./pages/ProductList";
import { CartProvider } from "./context/CartContext";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/auth", element: <LoginSignup /> },
      { path: "/products", element: <ProductList/>},
      { path: "/cart", element: <CartPage /> },
      { path: "/product/:id", element: <ProductDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </UserProvider> 
  </React.StrictMode>
);
