"use client";

import Image from "next/image";
import Link from "next/link";
import { useFavorite } from "../context/FavoriteContext";

export default function FavoriteView({ game }) {
  const { addToFavorite, Favorite } = useFavorite();

  const handleAdd = () => {
    addToFavorite(game);
  };

  return (
    <div
      className="
        border
        rounded-lg
        overflow-hidden
        shadow-lg
        hover:shadow-xl
        transition-shadow
      "
    >
      <Link href={`/ps-games/${game.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={game.background_image || "/placeholder-game.jpg"}
            alt={game.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="p-4">

        <h3 className="font-bold text-lg">
          {game.name}
        </h3>

        <div className="mt-4 flex gap-2">

          <button
            onClick={handleAdd}
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

          <Link
            href="/Favorite"
            className="
              bg-green-600
              text-white
              px-4
              py-2
              rounded
            "
          >
            Ver favoritos ({Favorite.length})
          </Link>

        </div>

      </div>
    </div>
  );
}