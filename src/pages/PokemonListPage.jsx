
import PokemonList from '../components/PokemonList';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from "../components/Pagination/Pagination";
import { usePokemons } from '../hooks/pokemons/usePokemons';
import '../styles/listStyle.css'

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
    <div className="wrapper">
      {loading ?
        <div className="loaderContainer">
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