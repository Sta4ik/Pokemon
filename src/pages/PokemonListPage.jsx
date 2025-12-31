import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from '../components/PokemonCard';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]); //https://purpleschool.ru/knowledge-base/article/react-js-api пример работы с api
  const [page, setPage] = useState(0);
  const limit = 50;

  useEffect(() => {
    async function fetchPokemons() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * limit}`
      );
      const data = await response.json();

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: details.name,
            image: details.sprites.front_default,
          };
        })
      );

      setPokemons(detailedPokemons);
    }

    fetchPokemons();
  }, [page]);

  return (
    <div className="pokemonList">
      {pokemons.map(item => (
        <PokemonCard key={item.name} name={item.name} image={item.image} />
      ))}
      <div className="pageChange">
        <button 
          onClick={() => setPage(page => page - 1)}
          disabled={page === 0}
        >
          Назад
        </button>
        <span>Страница {page + 1}</span>
        <button 
          onClick={() => setPage(page => page + 1)}
          disabled={page === 26}
        >
          Вперёд
        </button>
      </div>
    </div>
  );
}
export default PokemonList;