"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext"; // ← Agregar import

export default function Navbar() {
  const { cartCount } = useCart(); // ← Agregar esto

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
          <Link href="/cart" className="hover:text-gray-300 relative">
            🛒 Favoritos
            {cartCount > 0 && (  // ← Mostrar contador
              <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}