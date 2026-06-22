"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FavoritoContext = createContext();

export function FavoritoProvider({ children }) {
  const [favorito, setFavorito] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedFavorito = localStorage.getItem("favorito_ps");
    if (storedFavorito) {
      setFavorito(JSON.parse(storedFavorito));
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("favorito_ps", JSON.stringify(favorito));
    }
  }, [favorito, isMounted]);

  const addTofavorito = (game) => {
  const exists = favorito.some((item) => item.id === game.id);
    if (!exists) {
      setFavorito([...favorito, { ...game, cantidad: 1 }]);
    } else {
      alert("Este juego ya fue agregado a favoritos");
    }
  };


  const removeFromFavorito = (id) => {
    setFavorito(favorito.filter((item) => item.id !== id));
  };



  if (!isMounted) return null;

  return (
    <FavoritoContext.Provider
      value={{
        favorito,
        addTofavorito,
        removeFromFavorito,
        favoritoCount: favorito.length,
      }}
    >
      {children}
    </FavoritoContext.Provider>
  );
}

export function useFavorito() {
  const context = useContext(FavoritoContext);
  if (!context) {
    throw new Error("useFavorito debe usarse dentro de FavoritoProvider");
  }
  return context;
}