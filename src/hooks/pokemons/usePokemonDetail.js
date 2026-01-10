import { useState, useEffect } from 'react';

export function usePokemonDetail(pokemonName) {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchPokemon() {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

            if (!res.ok) {
                throw new Error(`Покемон "${pokemonName}" не найден`);
            }

            const data = await res.json();
            console.log(data)
            setPokemon(data);
        } catch (err) {
            console.error('Ошибка загрузки покемона:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (pokemonName) {
            fetchPokemon();
        }
    }, [pokemonName]);

    return {
        pokemon,
        loading,
        error,
        refresh: fetchPokemon
    };
}