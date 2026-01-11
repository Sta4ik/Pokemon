import { pokemonTypesIconMapper, pokemonTypesMapper } from "../../../shared/utils/pokemonTypesMapper";
import styles from './pokemontype.module.css'

function PokemonType({ types }) {
    return (
        <div>
            <h2>Типы:</h2>
            <div className={styles.typesrow}>
                {types.map(item => {
                    return (
                        <div key={item.type.name} className={styles.cardtype}>
                            {pokemonTypesIconMapper(item.type.name)}
                            <p>{pokemonTypesMapper(item.type.name)}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default PokemonType;