import { useState, useEffect, useCallback } from 'react';

export function useCaughtPokemon() {
    const [caughtPokemons, setCaughtPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCaughtPokemon = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const savedPokemons = localStorage.getItem("caughtPokemons");
            if (savedPokemons) {
                setCaughtPokemons(JSON.parse(savedPokemons));
            }
        } catch (err) {
            console.error('Ошибка загрузки:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    function deletePokemon(nameToDelete) {
        const updatedPokemons = caughtPokemons.filter(item => item.name !== nameToDelete);
        setCaughtPokemons(updatedPokemons);
        localStorage.setItem("caughtPokemons", JSON.stringify(updatedPokemons));
    };

    useEffect(() => {
        fetchCaughtPokemon();
    }, [fetchCaughtPokemon]);


    return {
        loading,
        error,
        deletePokemon,
        caughtPokemons,
        refresh: fetchCaughtPokemon,
    };
}