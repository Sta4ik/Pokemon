import PokemonCard from "../../components/PokemonCard";
import { NavLink } from 'react-router-dom';
import styles from './caughtpokemon.module.css'

function CaughtPokemon({caughtPokemons, deletePokemon}) {
    return (
        <div className={styles.caughtPokemons}>
            <h2>Мои покемоны:</h2>
            {caughtPokemons.length > 0 ? (
                caughtPokemons.map(item => (
                    <div className={styles.pokemonItem} key={item.name}>
                        <PokemonCard name={item.name} image={item.image} />
                        <button onClick={() => deletePokemon(item.name)}>Отпустить</button>
                    </div>
                ))
            ) : (
                <p>
                    У вас нет покемонов. <NavLink to="/random">Поймать</NavLink>
                </p>
            )}
        </div>
    );
}

export default CaughtPokemon;