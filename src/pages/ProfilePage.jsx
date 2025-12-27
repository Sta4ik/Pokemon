import { useState, useEffect } from "react";
import UploadAvatars from "../components/UploadAvatasr";
import PokemonCard from "../components/PokemonCard";
import { NavLink } from 'react-router-dom'

function Profile() {
    const [caughtPokemons, setCaughtPokemons] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("caughtPokemons");
        if (saved) {
            setCaughtPokemons(JSON.parse(saved));
        }
    }, []);

    return (
        <div className="container">
            <div className="info">
                <UploadAvatars />
                <h2>Name</h2>
                <h3>Описание</h3>
            </div>
            <div className="caughtPokemons">
                <h2>Мои покемоны:</h2>
                {caughtPokemons.length > 0 ? (
                    caughtPokemons.map(item => (
                        <PokemonCard name={item.name} image={item.image} />
                    ))
                ) : (
                    <p>У вас нет покемонов. <NavLink to='/random'>Поймать</NavLink></p>
                )}
            </div>
        </div>
    );
}

export default Profile;