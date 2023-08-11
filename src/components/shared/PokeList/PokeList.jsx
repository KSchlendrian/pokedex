import { useEffect, useState } from "react";
import PokeItem from "../PokeItem/PokeItem";

const PokeList = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => res.json())
      .then((data) => setAllPokemon(data.results));
  }, []);

  return (
    <>
      {allPokemon.map((pokemon) => (
        <PokeItem
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </>
  );
};

export default PokeList;
