"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedCart = localStorage.getItem("ps_cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("ps_cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (game) => {
    const exists = cart.some((item) => item.id === game.id);
    if (!exists) {
      setCart([...cart, { ...game, quantity: 1 }]);
    } else {
      setCart(
        cart.map((item) =>
          item.id === game.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  if (!isMounted) return null;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
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