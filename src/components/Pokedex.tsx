import { Result } from "./Pokedex.types";

const Pokedex = (props: { pokemons: Result[] | undefined; isLoading: any }) => {
  const { pokemons, isLoading } = props;
  console.log("isLoading: ", isLoading);
  console.log("pokemons: ", pokemons);
  const pokeList = pokemons?.map((pokemon, idx) => {
    return (
      <>
        <div key={idx}>{pokemon.name}</div>
      </>
    );
  });
  const noPoke = () => {
    return <p>Ainda nao ha nada por aqui </p>;
  };
  const resultado = pokemons ? pokeList : noPoke;
  return <>{resultado}</>;
};

export default Pokedex;
