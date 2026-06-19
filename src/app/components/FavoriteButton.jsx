"use client";

import { useFavorite } from "../context/FavoriteContext";

export default function FavoriteButton({ game }) {
  const {
    addToFavorite,
    removeFromFavorite,
    Favorite,
  } = useFavorite();

  const isFavorite = Favorite.some(
    (item) => item.id === game.id
  );

  return (
    <div className="flex gap-2">

      {!isFavorite ? (
        <button
          onClick={() => addToFavorite(game)}
          className="
            bg-blue-600
            text-white
            px-4
            py-2
            rounded
            hover:bg-blue-700
          "
        >
          ⭐ Agregar a Favoritos
        </button>
      ) : (
        <button
          onClick={() => removeFromFavorite(game.id)}
          className="
            bg-red-600
            text-white
            px-4
            py-2
            rounded
            hover:bg-red-700
          "
        >
          ❌ Quitar de Favoritos
        </button>
      )}

    </div>
  );
}