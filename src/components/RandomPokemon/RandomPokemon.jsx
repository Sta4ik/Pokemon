import PokemonCard from "../../components/PokemonCard";
import styles from './randompokemon.module.css'

function RandomPokemon({ add, pokemon, getRandomPokemon, remainingAttemps }) {
    return (
        <div className={styles.randomPokemon}>
            {!pokemon && <button onClick={getRandomPokemon}>Поймать случайного покемона (Оставшиеся попытки: {remainingAttemps})</button>}
            {pokemon && (
                <div>
                    <h2>Ты поймал:</h2>
                    <PokemonCard name={pokemon.name} image={pokemon.image} />
                    <div>
                        <button onClick={() => add(pokemon)}>Добавить покемона</button>
                        <button onClick={getRandomPokemon}>Поменять покемона (Оставшиеся попытки: {remainingAttemps})</button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default RandomPokemon;