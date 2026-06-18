"use client";

import { useCart } from "../context/CartContext";

export default function FavoriteButton({ game }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(game)}
      className="
        bg-blue-600
        text-white
        px-4
        py-2
        rounded
        hover:bg-blue-700
      "
    >
      ⭐ Favorito
    </button>
  );
}