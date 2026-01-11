import styles from './profilepage.module.css';
import { useProfile } from "../../hooks/profile/useProfile";
import { useCaughtPokemon } from "../../hooks/caughtPokemon/useCaughtPokemon"
import { ProfileHeader } from "../../components";
import { CaughtPokemon } from "../../shared/ui";

function Profile() {
    const {
        name,
        description,
        isEditing,
        saveProfile,
        onChangeDescription,
        onChangeName,
        onChangeIsEditable } = useProfile();

    const {
        loading,
        error,
        deletePokemon,
        caughtPokemons } = useCaughtPokemon()


    return (
        <div className={styles.container}>
            <ProfileHeader
                name={name}
                description={description}
                onChangeDescription={onChangeDescription}
                onChangeName={onChangeName}
                onChangeIsEditable={onChangeIsEditable}
                saveProfile={saveProfile}
                isEditing={isEditing}
            />

            <CaughtPokemon
                deletePokemon={deletePokemon}
                caughtPokemons={caughtPokemons}
            />
        </div>
    );
}

export default Profile;