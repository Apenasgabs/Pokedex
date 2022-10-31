/* eslint-disable react/jsx-no-undef */
import Pokemon from "./Pokemon/Pokemon";
import { poke } from "./Pokemon/Pokemon.types";

const Pokedex = (props: { pokemons: any; isLoading: any }) => {
  const { pokemons, isLoading } = props;
  return (
    <>
      {" "}
      <div className="pokedex-header">
        <h1>Pokedex</h1>
      </div>
      {isLoading ? (
        <div>Calma ai que jaja te mostro</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon: poke, index: number) => {
              return (
                <div>
                  {pokemon.name}
                  <Pokemon pokeName={pokemon.name}></Pokemon>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Pokedex;
