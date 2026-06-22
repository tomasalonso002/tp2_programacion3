"use client";

import { useCart } from "@/app/context/CartContext";
import GameCard from "@/app/components/GameCard";

export default function Page(){
    const { cart } = useCart()

    return(
      <main className="flex flex-col items-center pt-10">
      <section className="w-full max-w-3xl flex flex-col items-center bg-gray-800 rounded-lg p-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrE4Xg0bnJnv3uzzh9HalVK8asDSw6bLKDzyA7US48-7s9b-EMjIbgJqU&s=10"
          className="h-24 w-24 rounded-full"
          alt=""
        />
        <h1 className="text-3xl font-bold text-gray-400">Tomas Alonso</h1>
        <p className="text-gray-400">tomas@gmail.com</p>
        <p className="flex gap-1 items-center text-gray-400">
          <svg width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          Argentina
        </p>
      </section>
        <section className="w-full max-w-5xl flex flex-col items-center bg-gray-800 rounded-lg p-10 mt-10">
            {cart.length === 0 ? (
                <div className="text-zinc-200 p-8 text-center">
                    No tienes juegos favoritos todavía.
                </div>
                ) : (
                    <>
                    <h1 className="text-4xl mb-5 text-zinc-200 font-semibold">Mis Juegos Favoritos</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cart.map((game) => (
                        <GameCard
                        key={game.id}
                        game={game}
                        showFavoriteButton={false}
                        />
                    ))}
                </div>
                </>
                )}
        </section>
    </main>
    )
}