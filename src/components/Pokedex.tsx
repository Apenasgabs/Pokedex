// import Pokemon from "./Pokemon/Pokemon";
import { Pokemon } from "./Pokemon";
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
              return <Pokemon key={index} pokeName={pokemon} />;
            })}
        </div>
      )}
    </>
  );
};

export default Pokedex;
