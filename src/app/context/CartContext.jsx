"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedCart = localStorage.getItem("carrito_ps");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("carrito_ps", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (game) => {
  const exists = cart.some((item) => item.id === game.id);
    if (!exists) {
      setCart([...cart, { ...game, cantidad: 1 }]);
    } else {
      alert("Este juego ya fue agregado al carrito");
    }
  };


  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };


  if (!isMounted) return null;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        cartCount: cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}