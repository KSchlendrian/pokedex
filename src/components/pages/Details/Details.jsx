import { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { apiBaseLink } from "../../utilities/api";

const Details = (props) => {
  const [allPokemonDetails, setAllPokemonDetails] = useState([]);
  const pokemonId = useParams().id;

  useEffect(() => {
    fetch(`${apiBaseLink}/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => setAllPokemonDetails(data));
  }, []);

  if (!allPokemonDetails.sprites) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <img
        src={allPokemonDetails.sprites?.other.dream_world.front_default}
        alt=""
      />
      <p>#{allPokemonDetails.id}</p>
      <p>{allPokemonDetails.name}</p>
      {allPokemonDetails.types.map((type) => {
        return <p key={type.type.name}>{type.type.name}</p>;
      })}
    </>
  );
};

export default Details;
