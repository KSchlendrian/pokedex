import { useEffect, useState } from "react";
import PokeItem from "../PokeItem/PokeItem";
import { apiBaseLink } from "../../utilities/api";

const PokeList = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    fetch(`${apiBaseLink}/pokemon/?limit=1281`)
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
