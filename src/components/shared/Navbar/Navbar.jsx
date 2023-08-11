import { Link } from "react-router-dom";
import menu from "../../../assets/images/menu.png";
import pokemonHero from "../../../assets/images/pokemon.png";
import mode from "../../../assets/images/mode.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">
        <img
          src={pokemonHero}
          alt=""
        />
      </Link>
      <div>
        <img
          src={menu}
          alt=""
        />
        <input
          type="text"
          name="search_pokemon"
          id="search-pokemon"
          placeholder="Search Pokemon"
        />
        <img
          src={mode}
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
