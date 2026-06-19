"use client";

import { useFavorite } from "@/app/context/FavoriteContext";
import GameCard from "@/app/components/GameCard";

export default function Favoritos() {
  const { Favorite } = useFavorite();

  return (
    <section>

      <h1 className="text-3xl font-bold mb-6">
        ❤️ Juegos Favoritos
      </h1>

      {Favorite.length === 0 ? (

        <div className="border rounded-lg p-8 text-center">
          No tienes juegos favoritos todavía.
        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {Favorite.map((game) => (
            <GameCard
              key={game.id}
              game={game}
            />
          ))}

        </div>

      )}

    </section>
  );
}