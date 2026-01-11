import { useParams, useNavigate } from "react-router-dom";
import { usePokemonDetail } from "../../hooks";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { PokemonHeader, PokemonStats, PokemonType, PokemonSound, PokemonEvolution } from '../../components';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './pokemondetail.module.css'

function PokemonDetailPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const { pokemon, loading, error, refresh } = usePokemonDetail(name);

  const playSound = (url) => {
    new Audio(url).play();
  }

  if (loading) return (
    <div className={styles.loadercontainer}>
      <CircularProgress />
    </div>
  );

  if (error) {
    return (
      <div>
        <h1>Ошибка {error} при получении покемона {name}</h1>
        <div>
          <button onClick={() => navigate(-1)}>Назад</button>
          <button onClick={refresh}>Перезагрузить</button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.pokemonDetail}>
      <div className={styles.backButton}>
        <button onClick={() => navigate(-1)}><ArrowBackIcon /></button>
      </div>
      <PokemonHeader
        name={pokemon.name}
        img={pokemon.sprites.front_default}
        id={pokemon.id}
        height={pokemon.height}
        weight={pokemon.weight}
        baseExperience={pokemon.base_experience}
      />
      <PokemonStats stats={pokemon.stats} />

      <PokemonType types={pokemon.types} />

      <PokemonSound cries={pokemon.cries} playSound={playSound} />

      <PokemonEvolution id={pokemon.id} />
    </div>
  );
}
export default PokemonDetailPage;