import { useState, useEffect } from 'react';

export function useEvalution(id) {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getChainUrl(id) {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

            if (!res.ok) {
                throw new Error(`Покемон с id "${id}" не найден`);
            }

            const data = await res.json();

            return {
                chainUrl: data.evolution_chain.url
            };
        }
        catch (err) {
            throw err;
        }
    }

    function extractEvolutionChain(chain) {
        const evolutionArray = [];

        function traverse(chain) {
            if (chain && chain.species) {
                evolutionArray.push({
                    name: chain.species.name,
                });
            }

            if (chain.evolves_to && chain.evolves_to.length > 0) {
                traverse(chain.evolves_to[0]);
            }
        }

        traverse(chain);
        return evolutionArray;
    }

    async function fetchDetails(name) {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

            if (!res.ok) {
                throw new Error(`Покемон с цепочкой эволюции "${name}" не найден`);
            }

            const data = await res.json();

            return {
                name: name,
                url: data.sprites.front_default
            }
        }
        catch (err) {
            throw err;
        }
    }

    async function fetchPokemons() {
        try {
            setLoading(true);
            setError(null);
            const { chainUrl } = await getChainUrl(id);
            
            const res = await fetch(chainUrl);

            if (!res.ok) {
                throw new Error(`Покемон с цепочкой эволюции "${id}" не найден`);
            }

            const data = await res.json();
            console.log(data)
            const evolutionChain = extractEvolutionChain(data.chain);
            const evolitions = [];
            for (let i = 0; i < evolutionChain.length; i++) {
                const item = await fetchDetails(evolutionChain[i].name);
                console.log(item)
                evolitions.push(item);
            }
            // evolutionChain.(item => await fetchDetails(item.name, item.url))
            setPokemons(evolitions);
        } catch (err) {
            console.error('Ошибка загрузки покемонов:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (id) {
            fetchPokemons();
        }
    }, [id]);

    return {
        pokemons,
        loading,
        error,
        refresh: fetchPokemons
    };
}