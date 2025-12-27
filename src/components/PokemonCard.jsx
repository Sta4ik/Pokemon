import { NavLink } from "react-router-dom";

function PokemonCard({ name, image }) {
  return (
    <div className="pokemonCard">
      <NavLink to={`/pokemon/${name}`}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
      </NavLink>
    </div>
  )
}
export default PokemonCard;