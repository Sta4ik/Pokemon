import Logo from '../../assets/pokemonlogo.svg?react';
import CircularProgress from '@mui/material/CircularProgress';
import { Pagination, PokemonList } from '../../components';
import { usePokemons } from '../../hooks/pokemons/usePokemons';
import styles from './pokemonlistpage.module.css'

function PokemonListPage() {
  const {
    pokemons,
    page,
    loading,
    error,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    isFirstPage,
    isLastPage,
    refresh
  } = usePokemons();

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
        <button onClick={refresh}>Перезагрузить</button>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <Logo />
      {loading ?
        <div className={styles.loaderContainer}>
          <CircularProgress size="3rem" />
        </div> :
        <PokemonList pokemons={pokemons} />
      }

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        loading={loading}
        onPageChange={goToPage}
        onPrevPage={prevPage}
        onNextPage={nextPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
    </div>
  );
}
export default PokemonListPage;