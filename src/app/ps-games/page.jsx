"use client";

import { useEffect, useState } from "react";
import { getPlayStationGames, searchGames } from "../services/rawgApi";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";

export default function PlayStationGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadGames();
  }, [page, searchQuery]);

  const loadGames = async () => {
    setLoading(true);
    try {
      let data;
      if (searchQuery) {
        data = await searchGames(searchQuery, page);
      } else {
        data = await getPlayStationGames(page);
      }
      setGames(data.results || []);
      setTotalPages(Math.ceil(data.count / 20));
    } catch (error) {
      console.error("Error loading games:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl">Cargando juegos...</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Juegos de PlayStation</h1>
      
      <SearchBar onSearch={handleSearch} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      
      {games.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No se encontraron juegos</p>
        </div>
      )}
      
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="px-4 py-2">
          Página {page} de {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}