import { getPokemon, searchPokemon } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsloading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  console.log("loading: ", isLoading);
  const fetchPokemons = async () => {
    try {
      setIsloading(true);
      const result = await getPokemon();
      setPokemons(result);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    console.log('carregou');
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Searchbar />
        <Pokedex pokemons={pokemons} isLoading={isLoading} />
      </header>
    </div>
  );
}

export default App;
