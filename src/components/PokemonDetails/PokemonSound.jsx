import styles from './pokemonsound.module.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function PokemonSound({cries, playSound}) {
    return (
        <>
            {cries && (
                <div className={styles.cries}>
                    <h2>Звуки:</h2>
                    <div className={styles.buttonwrapper}>
                        <button className={styles.criesbutton} onClick={() => playSound(cries.latest)}><VolumeDownIcon />Современный крик</button>
                        <button className={styles.criesbutton} onClick={() => playSound(cries.legacy)}><MusicNoteIcon /> Классический крик</button>
                    </div>
                </div>
            )}
        </>
    );
}
export default PokemonSound;