import axios from "axios";

const RAWG_API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

const rawgApi = axios.create({
  baseURL: BASE_URL,
  params: {
    key: RAWG_API_KEY,
  },
});

export const PLAYSTATION_PLATFORMS = {
  PS1: 1,
  PS2: 8,
  PS3: 8,
  PS4: 18,
  PS5: 187,
  PSP: 19,
  PS_VITA: 21,
};

export const getGamesByPlatform = async (platformId, page = 1, pageSize = 20) => {
  try {
    const response = await rawgApi.get("/games", {
      params: {
        platforms: platformId,
        page,
        page_size: pageSize,
        ordering: "-rating",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};

export const getPlayStationGames = async (page = 1, pageSize = 20) => {
  try {
    // PS4 y PS5 juntos
    const response = await rawgApi.get("/games", {
      params: {
        platforms: `${PLAYSTATION_PLATFORMS.PS4},${PLAYSTATION_PLATFORMS.PS5}`,
        page,
        page_size: pageSize,
        ordering: "-rating",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching PlayStation games:", error);
    throw error;
  }
};

export const searchGames = async (query, page = 1, pageSize = 20) => {
  try {
    const response = await rawgApi.get("/games", {
      params: {
        search: query,
        search_precise: false,
        page,
        page_size: pageSize,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching games:", error);
    throw error;
  }
};

export const getGameDetails = async (id) => {
  try {
    const response = await rawgApi.get(`/games/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching game details:", error);
    throw error;
  }
};

export const getGamesByGenre = async (genreId, page = 1, pageSize = 20) => {
  try {
    const response = await rawgApi.get("/games", {
      params: {
        genres: genreId,
        platforms: `${PLAYSTATION_PLATFORMS.PS4},${PLAYSTATION_PLATFORMS.PS5}`,
        page,
        page_size: pageSize,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching games by genre:", error);
    throw error;
  }
};

export default rawgApi;














