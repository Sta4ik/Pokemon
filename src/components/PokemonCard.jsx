import { NavLink } from "react-router-dom";
import styles from './pokemoncard.module.css'

function PokemonCard({ name, image }) {
  return (
    <div className={styles.pokemonCard}>
      <NavLink to={`/pokemon/${name}`}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
      </NavLink>
    </div>
  )
}
export default PokemonCard;