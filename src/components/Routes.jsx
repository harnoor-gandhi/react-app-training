import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./cart";
import Header from "./Header";
import Homepage from "./homepage";
import UserProfile from "./UserProfile";
import LoginPage from "./loginPage";
import Signup from "./Signup";
import MyOrders from "./MyOrders";
// import Header from "./Header";
export const emailcontext = React.createContext();
// export const productContext = React.createContext();



export const productContext = createContext();

export default function AllRoutes({ searchQuery, setSearchQuery }) {
  const [login, setLogin] = React.useState({});
  const [addedProducts, setAddedProducts] = React.useState([]);

  const showName = (name, inLocal) => {
    setLogin(name);
  }

  const increaseQuantity = (product) => {
    const updatedProducts = addedProducts.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
    setAddedProducts(updatedProducts);
  };

  const decreaseQuantity = (product) => {
    const updatedProducts = addedProducts.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: p.quantity > 1 ? p.quantity - 1 : 1 };
      }
      return p;
    });
    setAddedProducts(updatedProducts);
  };

  const removeFromCart = (product) => {
    const updatedProducts = addedProducts.filter((p) => p.id !== product.id);
    setAddedProducts(updatedProducts);
  };

  return (
    <div>
      <productContext.Provider
        value={{
          addedProducts,
          setAddedProducts,
          increaseQuantity,
          decreaseQuantity,
          removeFromCart
        }}
      >
        <emailcontext.Provider value={login}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <div className="home">
                    <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <Homepage showName={showName} searchQuery={searchQuery} />
                  </div>
                }
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/login" element={<LoginPage showName={showName} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/my-orders" element={<MyOrders />} />

            </Routes>
          </BrowserRouter>
        </emailcontext.Provider>
      </productContext.Provider>
    </div>
  );
}
