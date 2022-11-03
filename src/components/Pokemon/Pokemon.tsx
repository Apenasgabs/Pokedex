import React from "react";
import { searchPokemon } from "../../api";

const Pokemon = (props: { pokeName: any }) => {
  console.log("props: ", props);
  const { pokeName } = props;
  console.log("pokeName: ", pokeName);
  return (
    <>
      <div>{pokeName.name}</div>
    </>
  );
};
export default Pokemon;
