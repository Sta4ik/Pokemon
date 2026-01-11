import { useCallback, useEffect, useState } from 'react';

export function useRandomPokemon() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [attemp, setAttemp] = useState(0);
    const MAX_ATTEMP = 5;

    async function getRandomPokemon() {
        if (attemp >= MAX_ATTEMP) {
            console.warn("Превышено количество допустимых попыток");
            return
        }


        try {
            setLoading(true);
            setError(null);

            const id = Math.floor(Math.random() * 1052) + 1;
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

            if (!res.ok) {
                throw new Error(`Покемон "${pokemonName}" не найден`);
            }

            const data = await res.json();

            const pok = { name: data.name, image: data.sprites.front_default };
            setPokemon(pok);
            addCount();
        } catch (err) {
            console.error('Ошибка загрузки покемона:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const getAttemp = useCallback(() => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDate();
        const temp = JSON.parse(localStorage.getItem("attemp"));
        if (!temp) {
            return localStorage.setItem("attemp", JSON.stringify({ date: `${day}.${month}.${year}`, count: 0 }));
        }
        const localDate = temp.date;
        if (localDate !== `${day}.${month}.${year}`) {
            return localStorage.setItem("attemp", JSON.stringify({ date: `${day}.${month}.${year}`, count: 0 }));
        }
        setAttemp(Number(temp.count));
    }, []);

    function reset() {
        setPokemon(null);
    };

    function addCount() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDate();
        const count = attemp;
        setAttemp(count + 1);
        return localStorage.setItem("attemp", JSON.stringify({ date: `${day}.${month}.${year}`, count: count + 1 }));
    }

    useEffect(() => {
        getAttemp();
    }, [getAttemp]);

    return {
        getRandomPokemon,
        pokemon,
        loading,
        error,
        reset,
        remainingAttemps: MAX_ATTEMP - attemp
    };
}