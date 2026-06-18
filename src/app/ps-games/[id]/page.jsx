import { getGameDetails } from "@/app/services/rawgApi";
import FavoriteButton from "@/app/components/FavoriteButton";

export default async function GameDetail({ params }) {
  const { id } = await params;

  const game = await getGameDetails(id);

  console.log("GAME:", game);

  if (!game) {
    return (
      <h1 className="text-2xl font-bold">
        Juego no encontrado
      </h1>
    );
  }

  return (
    <section className="max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-4">
        {game.name}
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mt-6">

        <div>
          {game.background_image ? (
            <img
              src={game.background_image}
              alt={game.name}
              className="rounded-lg shadow-md w-full"
            />
          ) : (
            <div className="border rounded-lg p-10 text-center">
              Imagen no disponible
            </div>
          )}
        </div>

        <div>

          <h2 className="text-2xl font-semibold mb-3">
            Descripción
          </h2>

          <p className="text-gray-700 mb-4">
            {game.description_raw ||
              "No hay descripción disponible."}
          </p>

          <div className="space-y-2">

            <p>
              ⭐ <strong>Rating:</strong>{" "}
              {game.rating || "N/A"}
            </p>

            <p>
              📅 <strong>Lanzamiento:</strong>{" "}
              {game.released || "Desconocido"}
            </p>

            <p>
              🎮 <strong>Metacritic:</strong>{" "}
              {game.metacritic || "N/A"}
            </p>

          </div>

          <div className="mt-6">
            <FavoriteButton game={game} />
          </div>

        </div>

      </div>

    </section>
  );
}