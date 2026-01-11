import { useEvalution } from "../../hooks/evolution/useEvalution";
import PokemonCard from "../PokemonCard";
import styles from './pokemonevolution.module.css';

function PokemonEvolution({ id }) {
    const {
        pokemons,
        loading,
        error,
        refresh
    } = useEvalution(id);
    if (error) {
        return (
            <div>
                <h1>Ошибка загрузки</h1>
                <button onClick={refresh}>Перезагрузить</button>
            </div>
        )
    }
    return (
        <div className={styles.evo}>
            <h2>Цепочка эволюции:</h2>
            <div className={styles.evolution}>
                {pokemons.map(item => {
                    return (
                        <div className={styles.evolutionwrapper}>
                            <PokemonCard key={item.name} name={item.name} image={item.url} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default PokemonEvolution;