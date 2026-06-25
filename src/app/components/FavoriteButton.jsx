"use client";

import { useFavorito } from "../context/FavoritoContext";

export default function FavoriteButton({ game }) {
  const { addTofavorito } = useFavorito();

  return (
    <button
      onClick={() => addTofavorito(game)}
      className="
        bg-blue-600
        text-white
        px-4
        py-2
        rounded
        hover:bg-blue-700
        cursor-pointer
      "
    >
      ⭐ Favorito
    </button>
  );
}