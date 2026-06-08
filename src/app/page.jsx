"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async (search = "") => {
    setLoading(true);
    try {
      let url = "https://api.rawg.io/api/games?key=TU_API_KEY&platforms=playstation";
      if (search) {
        url = `https://api.rawg.io/api/games?key=TU_API_KEY&search=${search}&platforms=playstation`;
      }
      
      const response = await fetch(url);
      const data = await response.json();
      setGames(data.results || []);
    } catch (error) {
      console.error("Error fetching games:", error);
      setGames([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchGames(searchTerm);
  };

  const fetchGameDetails = async (id) => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games/${id}?key=TU_API_KEY`);
      const data = await response.json();
      setSelectedGame(data);
    } catch (error) {
      console.error("Error fetching game details:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="bg-black/50 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            PlayStation Games Library
          </h1>
          <p className="text-center text-gray-400 mt-2">
            Explora los mejores juegos de PlayStation
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Buscar juegos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Buscar
            </button>
          </div>
        </form>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {selectedGame ? (
              <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto">
                <div className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="sticky top-0 bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">{selectedGame.name}</h2>
                    <button
                      onClick={() => setSelectedGame(null)}
                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="p-6">
                    {selectedGame.background_image && (
                      <Image
                        src={selectedGame.background_image}
                        alt={selectedGame.name}
                        width={600}
                        height={300}
                        className="rounded-lg w-full object-cover"
                        unoptimized
                      />
                    )}
                    <div className="mt-4 space-y-3">
                      <p>
                        <span className="font-semibold">Fecha de lanzamiento:</span>{" "}
                        {new Date(selectedGame.released).toLocaleDateString()}
                      </p>
                      <p>
                        <span className="font-semibold">Rating:</span>{" "}
                        ⭐ {selectedGame.rating}/5 ({selectedGame.ratings_count} votos)
                      </p>
                      <p>
                        <span className="font-semibold">Géneros:</span>{" "}
                        {selectedGame.genres?.map(g => g.name).join(", ")}
                      </p>
                      <p>
                        <span className="font-semibold">Plataformas:</span>{" "}
                        {selectedGame.platforms?.map(p => p.platform.name).join(", ")}
                      </p>
                      {selectedGame.description_raw && (
                        <>
                          <p className="font-semibold mt-4">Descripción:</p>
                          <p className="text-gray-300 leading-relaxed">
                            {selectedGame.description_raw}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {games.map((game) => (
                  <div
                    key={game.id}
                    onClick={() => fetchGameDetails(game.id)}
                    className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-blue-500"
                  >
                    {game.background_image && (
                      <div className="relative h-48">
                        <Image
                          src={game.background_image}
                          alt={game.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-1">
                        {game.name}
                      </h3>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-yellow-500">
                          ⭐ {game.rating}/5
                        </span>
                        <span className="text-gray-400">
                          {game.released?.split("-")[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {!loading && games.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No se encontraron juegos. ¡Intenta con otra búsqueda!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}