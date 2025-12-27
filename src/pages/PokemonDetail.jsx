import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function PokemonDetailPage() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setPokemon(data);
    }
    fetchPokemon();
  }, [name]);

  if (!pokemon) return <p>Загрузка...</p>;

  return (
    <div className="pokemonDetail">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="stats">
        <h2>Характеристики:</h2>
        {pokemon.stats.map(item => {
          return (
            <p>{item.stat.name}: {item.base_stat}</p>
          )
        })}
      </div>
      <div className="type">
        <h2>Типы:</h2>
        {pokemon.types.map(item => {
          return (
            <p>{item.type.name}</p>
          )
        })}
      </div>
    </div>
  );
}
export default PokemonDetailPage;