import React, { useState } from "react";
import { searchPokemon } from "../api";
import { poke } from "./pokemon";

const Searchbar = () => {
  const [search, setSearch] = useState("charizard");
  const [pokeAtual, setPokeAtual] = useState<poke>();
  const onChangeHandler = (e: any) => {
    setSearch(e.target?.value);
    console.log("search: ", search);
  };
  const onClickBtnHandler = () => {
    onSearchHandler(search);
  };
  const onSearchHandler = async (pokemon: any) => {
    const result = await searchPokemon(pokemon);
    setPokeAtual(result);
    console.log("pokeAtual: ", pokeAtual?.name);
  };
  return (
    <div className="searchbarcontainer">
      <input
        className="searchbar"
        type="text"
        placeholder="Busca o poke"
        onChange={onChangeHandler}
      />
      <button onClick={onClickBtnHandler}>Buscar</button>
      {pokeAtual ? (
        <>
          <div>Nome {pokeAtual.name}</div>
          <br />
          <div>
            Tipo
            <br />
            {pokeAtual.types.map((i) => {
              console.log("pokeAtual: ", pokeAtual.types[0].type.name);
              return i.type.name;
            })}
          </div>
        </>
      ) : (
        "nada"
      )}
    </div>
  );
};
export default Searchbar;
