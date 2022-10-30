import React from "react";

const Navbar = () => {
  const logImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <img alt="PokéAPI" src={logImg}></img>
    </nav>
  );
};
export default Navbar;
