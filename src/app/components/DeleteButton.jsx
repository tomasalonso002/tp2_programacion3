"use client";

import { useCart } from "../context/CartContext";

export default function RemoveFromCart({ game }) {
  const { removeFromCart } = useCart();

  return (
    <button
      onClick={() => removeFromCart(game.id)}
      className="
        bg-red-600
        text-white
        px-4
        py-2
        rounded
        hover:bg-red-700
      "
    >
      Eliminar
    </button>
  );
}