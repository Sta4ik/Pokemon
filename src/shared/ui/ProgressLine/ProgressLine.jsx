import styles from './progressline.module.css';

function ProgressLine ({ label, value, maxValue, color }) {
    const percentage = Math.min(Math.round((value / maxValue) * 100), 100);

    return (
        <div className={styles.progressContainer}>
            <div className={styles.progressLine}>
                <div
                    className={styles.progressFill}
                    style={{ width: `${percentage}%`, backgroundColor: color }}
                >
                    <span className={styles.progressLabel}>{label}</span>

                </div>
                <span className={styles.progressValue}>{value}/{maxValue}</span>
            </div>
        </div>
    );
};

export default ProgressLine;
