import styles from './pokemonheader.module.css'
import Tooltip from '@mui/material/Tooltip';

function PokemonHeader({ id, name, img, height, weight, baseExperience }) {
  return (
    <>
      <div className={styles.header}>
        <h1>{name}
          <Tooltip title="Это порядковый номер в национальном Покедексе" placement='bottom'><span className={styles.id}> #{id}</span></Tooltip>
        </h1>
        <img src={img} alt={name} />
      </div>
      <div className={styles.physical}>
        <h2>Физические данные:</h2>
        <p>Рост: {height / 10} м</p>
        <p>Вес: {weight / 10} кг</p>
        <p>Базовый опыт: {baseExperience}</p>
      </div>
    </>
  );
}
export default PokemonHeader;