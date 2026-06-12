"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Mi carrito
      </h1>

      {cart.length === 0 ? (
        <div>

          <p className="mb-4">
            No hay juegos en el carrito.
          </p>

          <Link
            href="/ps-games"
            className="
              bg-blue-600
              text-white
              px-4
              py-2
              rounded
            "
          >
            Ver juegos
          </Link>

        </div>
      ) : (

        <div className="space-y-4">

          {cart.map((game) => (

            <div
              key={game.id}
              className="
                flex
                items-center
                gap-4
                border
                rounded-lg
                p-4
              "
            >

              <div className="relative w-36 h-24">

                <Image
                  src={
                    game.background_image ||
                    "/placeholder-game.jpg"
                  }
                  alt={game.name}
                  fill
                  className="object-cover rounded"
                />

              </div>

              <div className="flex-1">

                <Link
                  href={`/ps-games/${game.id}`}
                >
                  <h2 className="font-bold hover:text-blue-600">
                    {game.name}
                  </h2>
                </Link>

                <p>
                  ⭐ {game.rating?.toFixed(1)}
                </p>

              </div>

              <div className="flex items-center gap-2">

                <button
                  onClick={() =>
                    updateQuantity(
                      game.id,
                      game.quantity - 1
                    )
                  }
                  className="
                    px-3
                    py-1
                    bg-gray-300
                    rounded
                  "
                >
                  -
                </button>

                <span>
                  {game.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantity(
                      game.id,
                      game.quantity + 1
                    )
                  }
                  className="
                    px-3
                    py-1
                    bg-gray-300
                    rounded
                  "
                >
                  +
                </button>

              </div>

              <button
                onClick={() =>
                  removeFromCart(game.id)
                }
                className="
                  bg-red-600
                  text-white
                  px-4
                  py-2
                  rounded
                "
              >
                Eliminar
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}