import { pokeList } from "./components/general.types";

export const searchPokemon = async (pokemon: string) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};
export const getPokemon = async (limit = 50, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getPokemonData = async (url: string) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};
