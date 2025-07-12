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
import { ToastContainer } from 'react-toastify';
import CategoryProducts from "./pages/CategoryProducts";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/auth", element: <LoginSignup /> },
      { path: "/products", element: <ProductList/>},
      { path: "/cart", element: <CartPage /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/products/category/:category", element: <CategoryProducts/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark" />
        <RouterProvider router={router} />
      </CartProvider>
    </UserProvider> 
  </React.StrictMode>
);
