import UploadAvatars from "../UploadAvatar/UploadAvatar";
import styles from './profileheader.module.css';

function ProfileHeader({ name, description, onChangeDescription, onChangeName, onChangeIsEditable, saveProfile, isEditing }) {

    return (
        <div className={styles.info}>
            <UploadAvatars />

            {isEditing ? (
                <div className={styles.editInfo}>
                    <input
                        type="text"
                        value={name}
                        onChange={event => onChangeName(event.target.value)}
                        placeholder="Введите имя"
                    />
                    <input
                        type="text"
                        value={description}
                        onChange={event => onChangeDescription(event.target.value)}
                        placeholder="Введите описание"
                    />
                    <button onClick={saveProfile}>Сохранить</button>
                </div>
            ) : (
                <div className={styles.nameDesciption}>
                    <h2>{name}</h2>
                    <h3>{description}</h3>
                    <button onClick={() => onChangeIsEditable()}>Редактировать</button>
                </div>
            )}
        </div>
    );
}

export default ProfileHeader;