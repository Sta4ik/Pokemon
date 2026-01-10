import PokemonCard from '../components/PokemonCard';
import '../styles/listStyle.css'

function PokemonList({ pokemons }) {
    return (
        <div className="pokemonList">
            {pokemons.map(item => (
                <PokemonCard name={item.name} image={item.image} key={item.name} />
            ))}
        </div>
    );
}
export default PokemonList;