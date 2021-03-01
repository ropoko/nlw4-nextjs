import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/ropoko.png" alt="ropokozada"/>
            <div>
                <strong>Ropoko brabo</strong>
                <p>
                    <img src="#" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}