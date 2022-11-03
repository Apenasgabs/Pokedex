import { getPokemon, getPokemonData } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { useState, useEffect, SetStateAction } from "react";
import { poke } from "./components/Pokemon/Pokemon.types";
import { uniPoke } from "./components/general.types";
interface pokeList {
  count: number;
  results: { name: string; url: string }[];
}
function App() {
  const [isLoading, setIsloading] = useState(false);
  const [pokemons, setPokemons] = useState<pokeList>();
  console.log("pokemons: ", pokemons);
  const salvaPoke = (result: SetStateAction<pokeList | undefined>) => {
    setPokemons(result);
    setIsloading(false);
  };
  // const [pokemons, setPokemons] = useState<pokeList>();
  console.log("loading: ", isLoading);
  const fetchPokemons = async () => {
    try {
      setIsloading(true);
      const data: Promise<pokeList> = await getPokemon();
      const promises: pokeList[] = (await data).results.map(
        async (pokemon: uniPoke) => {
          return await getPokemonData(pokemon.url);
        }
      );
      console.log("promises: ", promises);
      const result = await Promise.all(promises);
      console.log("result: ", result);
      result.length ? salvaPoke(result) : setIsloading(true);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Searchbar />
        {pokemons && (
          <Pokedex pokemons={pokemons.results} isLoading={isLoading} />
        )}
      </header>
    </div>
  );
}

export default App;
