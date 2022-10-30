import * as React from "react";

const Pokedex = (props: { pokemon: []; isLoading: boolean }) => {
  const { pokemon, isLoading } = props;
  return (
    <div className="pokedex-header">
      <h1>Pokedex</h1>
    </div>
  );
};

export default Pokedex;
