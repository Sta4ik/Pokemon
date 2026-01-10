import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function usePokemons() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const limit = 50;
    const totalPages = 26;

    const pageParam = searchParams.get('page');

    const initialPage = pageParam && !isNaN(pageParam)
        ? Math.max(0, Math.min(parseInt(pageParam, 10), totalPages - 1))
        : 0;

    const [page, setPage] = useState(initialPage);

    useEffect(() => {
        setSearchParams({ page: page.toString() });
    }, [page, setSearchParams]);

    const fetchPokemons = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * limit}`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            const detailedPokemons = await Promise.all(
                data.results.map(async (pokemon) => {
                    const res = await fetch(pokemon.url);
                    if (!res.ok) {
                        throw new Error(`Failed to fetch details for ${pokemon.name}`);
                    }
                    const details = await res.json();

                    return {
                        name: details.name,
                        image: details.sprites.front_default,
                    };
                })
            );

            setPokemons(detailedPokemons);

        } catch (err) {
            console.error('Error fetching pokemons:', err);
            setError(err.message || 'Failed to fetch pokemons');
        } finally {
            setLoading(false);
        }
    }, [page]);

    const nextPage = useCallback(() => {
        if (page < totalPages - 1) {
            setPage(prev => prev + 1);
        }
    }, [page, totalPages]);

    const prevPage = useCallback(() => {
        if (page > 0) {
            setPage(prev => prev - 1);
        }
    }, [page]);

    const goToPage = useCallback((pageNumber) => {
        if (pageNumber >= 0 && pageNumber < totalPages) {
            setPage(pageNumber);
        }
    }, [totalPages]);

    useEffect(() => {
        fetchPokemons();
    }, [fetchPokemons]);

    return {
        pokemons,
        page,
        loading,
        error,
        totalPages,
        nextPage,
        prevPage,
        goToPage,
        isFirstPage: page === 0,
        isLastPage: page === totalPages - 1,
        refresh: fetchPokemons
    };
}