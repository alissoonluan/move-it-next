import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div class={styles.profileContainer}>
            <img src="https://github.com/alissoonluan.png" alt="Alisson Luan"/>
            <div>
                <strong>Alisson Luan</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}