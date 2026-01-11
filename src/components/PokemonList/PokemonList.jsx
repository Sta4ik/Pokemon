import PokemonCard from '../PokemonCard/PokemonCard';
import styles from './pokemonlist.module.css'

function PokemonList({ pokemons }) {
    return (
        <div className={styles.pokemonList}>
            {pokemons.map(item => (
                <PokemonCard name={item.name} image={item.image} key={item.name} />
            ))}
        </div>
    );
}
export default PokemonList;