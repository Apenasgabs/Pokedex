import React from "react";

const Pokemon = (pokeName: any) => {
  console.log("pokeName: ", pokeName);
  // const pokemon = await searchPokemon(nome);
  // return <img src={pokemon.sprites.front_default} alt="" />;
  return pokeName ? <div>{pokeName.name}</div> : <>teste</>;
};
export default Pokemon;
