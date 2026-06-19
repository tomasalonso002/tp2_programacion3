"use client";

import Link from "next/link";
import { useFavorite } from "../context/FavoriteContext";

export default function Navbar() {
  const { FavoriteCount } = useFavorite();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">

        <Link href="/" className="text-xl font-bold">
          🎮 PS Game Store
        </Link>

        <div className="flex gap-6">

          <Link href="/ps-games" className="hover:text-gray-300">
            Juegos
          </Link>

          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>

          <Link
            href="/ps-games/favoritos"
            className="hover:text-gray-300 relative"
          >
            ❤️ Favoritos

            {FavoriteCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
                {FavoriteCount}
              </span>
            )}

          </Link>

        </div>

      </div>
    </nav>
  );
}