import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

function RandomPokemon() {
    const [pokemon, setPokemon] = useState(null);
    const [caughtPokemons, setCaughtPokemons] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("caughtPokemons");
        if (saved) {
            setCaughtPokemons(JSON.parse(saved));
        }
    }, []);

    async function getRandomPokemon() {
        const id = Math.floor(Math.random() * 898) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        const newPokemon = {
            name: data.name,
            image: data.sprites.front_default,
        };

        setPokemon(newPokemon);

        const updated = [...caughtPokemons, newPokemon];
        setCaughtPokemons(updated);
        localStorage.setItem("caughtPokemons", JSON.stringify(updated));
    }

    return (
        <div className="RandomPokemon">
            <button onClick={getRandomPokemon}>Поймать случайного покемона</button>
            {pokemon && (
                <div>
                    <h2>Ты поймал:</h2>
                    <PokemonCard name={pokemon.name} image={pokemon.image} />
                </div>
            )}

            <h2>Мои покемоны:</h2>
            <div className="CaughtPokemons">
                {caughtPokemons.map((item) => (
                    <PokemonCard name={item.name} image={item.image} />
                ))}
            </div>
        </div>
    );
}
export default RandomPokemon;