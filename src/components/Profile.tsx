import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/ropoko.png" alt="ropokozada"/>
            <div>
                <strong>Ropoko brabo</strong>
                <p>
                    <img src="#" alt="Level"/>
                    Level { level }
                </p>
            </div>
        </div>
    )
}