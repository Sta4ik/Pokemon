import { pokemonStatsMapper } from "../../utils/pokemonStatsMapper";
import { pokemonColorMapper } from '../../utils/pokemonStatsMapper'
import ProgressLine from "../ProgressLine/ProgressLine";
import styles from './pokemonstats.module.css'

function PokemonStats({ stats }) {
    return (
        <div className={styles.stats}>
            <h2>Характеристики:</h2>
            {stats.map(item => {
                return (
                    <ProgressLine key={item.stat.name} label={pokemonStatsMapper(item.stat.name)} value={item.base_stat} maxValue={200} color={pokemonColorMapper(item.stat.name)} />
                )
            })}
        </div>
    );
}
export default PokemonStats;