"use client";

import { useEffect, useState } from "react";
import { getPlayStationGames } from "../services/rawgApi";

export default function TestAPI() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    try {
      setLoading(true);
      const data = await getPlayStationGames(1, 5);
      setGames(data.results || []);
      console.log("Conexión exitosa:", data);
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-8">Probando conexión...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">✅ Conexión exitosa!</h1>
      <p className="mb-4">Se encontraron {games.length} juegos:</p>
      <ul className="list-disc pl-5">
        {games.map((game) => (
          <li key={game.id}>{game.name} (⭐ {game.rating})</li>
        ))}
      </ul>
    </div>
  );
}