"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [Favorite, setFavorite] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedFavorite = localStorage.getItem("favorito_ps");
    if (storedFavorite) {
      setFavorite(JSON.parse(storedFavorite));
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("favorito_ps", JSON.stringify(Favorite));
    }
  }, [Favorite, isMounted]);

  const addToFavorite = (game) => {
  const exists = Favorite.some((item) => item.id === game.id);
    if (!exists) {
      setFavorite([...Favorite, { ...game, cantidad: 1 }]);
    } else {
      alert("Este juego ya fue agregado a favoritos");
    }
  };


  const removeFromFavorite = (id) => {
    setFavorite(Favorite.filter((item) => item.id !== id));
  };


  if (!isMounted) return null;

  return (
    <FavoriteContext.Provider
      value={{
        Favorite,
        addToFavorite,
        removeFromFavorite,
        FavoriteCount: Favorite.length,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorite = () => useContext(FavoriteContext)

// agregar una nueva ruta (perfil o usuario) dentro de la ruta poner el nombre del usuario, gmail y varios datos mas. 
// mostrar una ruta similar a favoritos con el perfil del usuario (poder ver los favoritos que tiene ese perfil "read only" )
