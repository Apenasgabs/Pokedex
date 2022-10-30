import React, { useState } from "react";

const Searchbar = () => {
  const [pokeAtual, setPokeAtual] = useState("charizard");
  const onChangeHandler = (e: any) => {
    console.log(e.target?.value);
    setPokeAtual(e.target?.value);
  };

  return (
    <div className="Searchbarcontainer">
      <input
        type="text"
        placeholder="Busca o poke"
        onChange={onChangeHandler}
      />
      {pokeAtual}
    </div>
  );
};
export default Searchbar;
