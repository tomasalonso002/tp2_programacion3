"use client";

import { useFavorito } from "../context/FavoritoContext";

export default function RemoveFromFavorito({ game }) {
  const { removeFromFavorito } = useFavorito();

  return (
    <button
      onClick={() => removeFromFavorito(game.id)}
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