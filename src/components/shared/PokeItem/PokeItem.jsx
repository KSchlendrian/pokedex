import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PokeItem.css";

const PokeItem = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => setPokemonDetails(data));
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <section className="poke_item">
      <article>
        <Link to={`/details/${pokemonDetails.id}`}>
          <img
            src={pokemonDetails.sprites?.other.dream_world.front_default}
            alt=""
          />
        </Link>
        <div>
          <p>#{pokemonDetails.id}</p>
          <p>{capitalizeFirstLetter(props.name)}</p>
        </div>
      </article>
    </section>
  );
};

export default PokeItem;
