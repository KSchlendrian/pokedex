import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokeItem = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => setPokemonDetails(data));
  }, []);

  return (
    <section>
      <article>
        <Link to={"/details"}>
          <img
            src={
              pokemonDetails.sprites?.other["official-artwork"].front_default
            }
            alt=""
          />
        </Link>
        <p>{pokemonDetails.id}</p>
        <p>{props.name}</p>
      </article>
    </section>
  );
};

export default PokeItem;
