import { useState } from 'react';
import { useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';

function PokemonList(){
  const [pokemons, setPokemons] = useState([]); //https://purpleschool.ru/knowledge-base/article/react-js-api пример работы с api

  useEffect(() => {
    async function fetchPokemons() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
      const data = await response.json();

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return{
            name: details.name,
            image: details.sprites.front_default,
          };
        })
      );

      setPokemons(detailedPokemons);
    }

    fetchPokemons();
  }, []);

  return(
    <div className="PokemonList">
      {pokemons.map(item => {
        return(
            <PokemonCard name={item.name} image={item.image} />
        )})}
    </div>
  )
}
export default PokemonList;