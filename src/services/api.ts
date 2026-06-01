import axios from "axios";
import { ApiResponse, Character } from "../types/character";

// Instancia centralizada de Axios
const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 10000,
});

// Interceptor de request: se ejecuta antes de cada petición
api.interceptors.request.use(
  (config) => {
    console.log(`[REQUEST] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error),
);

// Interceptor de response: se ejecuta cuando llega la respuesta
api.interceptors.response.use(
  (response) => {
    console.log(`[RESPONSE] ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.log(`[ERROR] ${error.message}`);
    return Promise.reject(error);
  },
);

// Obtiene todos los personajes (máximo 5 páginas = 100 personajes)
export const getAllCharacters = async (): Promise<Character[]> => {
  const allCharacters: Character[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await api.get<ApiResponse>(`/character?page=${page}`);
    allCharacters.push(...response.data.results);
    hasMore = response.data.info.next !== null;
    page++;
    if (page > 5) break;
  }

  return allCharacters;
};

// Obtiene un personaje por su ID
export const getCharacterById = async (id: number): Promise<Character> => {
  const response = await api.get<Character>(`/character/${id}`);
  return response.data;
};

export default api;
