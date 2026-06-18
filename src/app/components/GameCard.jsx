"use client";

import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function GameCard({ game }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">

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

      <div className="p-4 flex flex-col flex-1">

        <Link href={`/ps-games/${game.id}`}>
          <h3 className="font-bold text-lg mb-2 hover:text-blue-600 transition-colors min-h-[56px]">
            {game.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span>{game.rating?.toFixed(1) || "N/A"}</span>
          </div>

          <span className="text-sm text-gray-600">
            {game.released?.split("-")[0] || "Próximamente"}
          </span>
        </div>

        <div className="mt-auto">
          <FavoriteButton game={game} />
        </div>

      </div>
    </div>
  );
}