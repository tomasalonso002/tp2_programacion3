"use client";

import { useCart } from "@/app/context/CartContext";
import GameCard from "@/app/components/GameCard";

export default function Favoritos() {
  const { cart } = useCart();

  return (
    <section>

      <h1 className="text-3xl font-bold mb-6">
        ❤️ Juegos Favoritos
      </h1>

      {cart.length === 0 ? (

        <div className="border rounded-lg p-8 text-center">
          No tienes juegos favoritos todavía.
        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {cart.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              showFavoriteButton={false}
            />
          ))}

        </div>

      )}

    </section>
  );
}