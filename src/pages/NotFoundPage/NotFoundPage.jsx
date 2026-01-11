import Psyduck from '../../assets/psyduck.svg?react'
import styles from './notfoundpage.module.css'
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Psyduck className={styles.image} />
            </div>
            <div className={styles.content}>
                <h1 className={styles.code}>
                    404
                </h1>

                <h2 className={styles.message}>Тут нет покемонов</h2>

                <div className={styles.buttons}>
                    <button onClick={() => navigate(-1)} className={styles.button}>Назад</button>
                    <button onClick={() => navigate('/')} className={`${styles.button} ${styles.buttonSecondary}`}>
                        На главную
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;