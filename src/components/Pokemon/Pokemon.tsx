import React from "react";
import { searchPokemon } from "../../api";

const Pokemon = (props: { pokeName: any }) => {
  console.log("props: ", props);
  const { pokeName } = props;
  return (
    <>
      <div>{pokeName.name}</div>
    </>
  );
};
export default Pokemon;
