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
        <div className={styles.evolution}>
            {pokemons.map(item => {
                console.log(item)
                return <PokemonCard key={item.name} name={item.name} image={item.url} />
            })}
        </div>
    )
}
export default PokemonEvolution;