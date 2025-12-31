import { useState, useEffect } from "react";
import UploadAvatars from "../components/UploadAvatasr";
import PokemonCard from "../components/PokemonCard";
import { NavLink } from 'react-router-dom';

function Profile() {
    const [caughtPokemons, setCaughtPokemons] = useState([]);
    const [name, setName] = useState("Pokemon collector1293");
    const [description, setDescription] = useState("Описание отсутствует.");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const savedPokemons = localStorage.getItem("caughtPokemons");
        if (savedPokemons) {
            setCaughtPokemons(JSON.parse(savedPokemons));
        }

        const savedName = localStorage.getItem("profileName");
        if (savedName) {
            setName(savedName);
        }

        const savedDescription = localStorage.getItem("profileDescription");
        if (savedDescription) {
            setDescription(savedDescription);
        }
    }, []);

    const saveProfile = () => {
        localStorage.setItem("profileName", name);
        localStorage.setItem("profileDescription", description);
        setIsEditing(false);
    };

    const deletePokemon = (nameToDelete) => {
        const updatedPokemons = caughtPokemons.filter(item => item.name !== nameToDelete);
        setCaughtPokemons(updatedPokemons);
        localStorage.setItem("caughtPokemons", JSON.stringify(updatedPokemons));
    };

    return (
        <div className="container">
            <div className="info">
                <UploadAvatars />

                {isEditing ? (
                    <div className="editInfo">
                        <input
                            type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            placeholder="Введите имя"
                        />
                        <input
                            type="text"
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                            placeholder="Введите описание"
                        />
                        <button onClick={saveProfile}>Сохранить</button>
                    </div>
                ) : (
                    <div className="nameDesciption">
                        <h2>{name}</h2>
                        <h3>{description}</h3>
                        <button onClick={() => setIsEditing(true)}>Редактировать</button>
                    </div>
                )}
            </div>

            <div className="caughtPokemons">
                <h2>Мои покемоны:</h2>
                {caughtPokemons.length > 0 ? (
                    caughtPokemons.map(item => (
                        <div className="pokemonItem">
                            <PokemonCard name={item.name} image={item.image} />
                            <button onClick={() => deletePokemon(item.name)}>Удалить</button>
                        </div>
                    ))
                ) : (
                    <p>
                        У вас нет покемонов. <NavLink to="/random">Поймать</NavLink>
                    </p>
                )}
            </div>
        </div>
    );
}

export default Profile;