import axios from "axios";

const RAWG_API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

const rawgApi = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: RAWG_API_KEY,
  },
});

export const PLATAFORMA_PS = {
  PS1: 1,
  PS2: 8,
  PS3: 16,
  PS4: 18,
  PS5: 187,
  PSP: 19,
  PS_VITA: 21,
};

async function traerJuegos(params) {
  const response = await rawgApi.get("/games", {
    params,
  });

  return response.data;
}

export function obtenerJuegosporPlataforma(
  platformId,
  page = 1
) {
  return traerJuegos({
    platforms: platformId,
    page,
    page_size: 20,
    ordering: "-rating",
  });
}

export function obtenerJuegosPlayStation(
  page = 1
) {
  return obtenerJuegosporPlataforma(
    `${PLATAFORMA_PS.PS4},${PLATAFORMA_PS.PS5}`,
    page
  );
}

export function buscarJuegos(
  query,
  page = 1
) {
  return traerJuegos({
    search: query,
    page,
    page_size: 20,
  });
}

export function obtenerJuegosporGenero(
  genreId,
  page = 1
) {
  return traerJuegos({
    genres: genreId,
    platforms:
      `${PLATAFORMA_PS.PS4},${PLATAFORMA_PS.PS5}`,
    page,
    page_size: 20,
  });
}

export async function obtenerDetalleJuego(id) {
  const response =
    await rawgApi.get(`/games/${id}`);

  return response.data;
}

export default rawgApi;