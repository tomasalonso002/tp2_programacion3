"use client";

import Link from "next/link";
import { useFavorito } from "../context/FavoritoContext";

export default function Navbar() {
  const { favoritoCount } = useFavorito();

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

          <Link href="/profile" className="hover:text-gray-300">
            Profile
          </Link>

          

          <Link
            href="/ps-games/favoritos"
            className="hover:text-gray-300 relative"
          >
            ❤️ Favoritos

            {favoritoCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
                {favoritoCount}
              </span>
            )}

          </Link>


            <Link href="#" className=" bg-red-500 hover:bg-red-700 hover:text-gray-300 p-1 rounded">
            Salir
          </Link>
        </div>

      </div>
    </nav>
  );
}