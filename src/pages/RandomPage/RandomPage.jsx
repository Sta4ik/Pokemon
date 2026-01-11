import { useCaughtPokemon } from "../../hooks/caughtPokemon/useCaughtPokemon";
import CaughtPokemon from "../../shared/ui/CaughtPokemon/CaughtPokemon";
import { useRandomPokemon } from "../../hooks/pokemons/useRandomPokemon";
import { RandomPokemon } from '../../components';
import styles from './randompakemonpage.module.css';

function RandomPokemonPage() {
    const {
        pokemon,
        getRandomPokemon,
        reset,
        remainingAttemps
    } = useRandomPokemon();

    const {
        loading,
        error,
        deletePokemon,
        caughtPokemons,
        refresh,
        addPokemon
    } = useCaughtPokemon();

    const add = (pokemon) => {
        addPokemon(pokemon);
        reset();
    }

    return (
        <div className={styles.randomPokemon}>
            <RandomPokemon
                remainingAttemps={remainingAttemps}
                add={add}
                getRandomPokemon={getRandomPokemon}
                pokemon={pokemon}
            />
            <CaughtPokemon caughtPokemons={caughtPokemons} deletePokemon={deletePokemon} />
        </div>
    );
}
export default RandomPokemonPage;