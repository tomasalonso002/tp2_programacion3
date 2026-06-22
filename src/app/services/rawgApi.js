import axios from "axios";

const RAWG_API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

const rawgApi = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: RAWG_API_KEY,
  },
});

export const PLAYSTATION_PLATFORMS = {
  PS1: 1,
  PS2: 8,
  PS3: 16,
  PS4: 18,
  PS5: 187,
  PSP: 19,
  PS_VITA: 21,
};

//Trae un juego

async function fetchGames(params) {
  const response = await rawgApi.get("/games", {
    params,
  });
  return response.data;
}

//Obtener juego por plataforma
export function getGamesByPlatform(
  platformId,
  page = 1
) {
  return fetchGames({
    platforms: platformId,
    page,
    page_size: 20,
    ordering: "-rating",
  });
}
//Obtener juego por PlayStation
export function getPlayStationGames(
  page = 1
) {
  return getGamesByPlatform(
    `${PLAYSTATION_PLATFORMS.PS4},${PLAYSTATION_PLATFORMS.PS5}`,
    page
  );
}

//Buscar juego
export function searchGames(
  query,
  page = 1
) {
  return fetchGames({
    search: query,
    page,
    page_size: 20,
  });
}

//Buscar juegos por genero
export function getGamesByGenre(
  genreId,
  page = 1
) {
  return fetchGames({
    genres: genreId,
    platforms:
      `${PLAYSTATION_PLATFORMS.PS4},${PLAYSTATION_PLATFORMS.PS5}`,
    page,
    page_size: 20,
  });
}

//Obtener detalles de un juego
export async function getGameDetails(id) {
  const response =
    await rawgApi.get(`/games/${id}`);
  return response.data;
}

export default rawgApi;