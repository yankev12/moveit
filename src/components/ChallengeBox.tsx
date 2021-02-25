import { useContext } from "react";
import styles from "../../styles/components/ChallengeBox.module.css";
import { ChallengeContext } from "../contexts/ChallengeContext";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengeContext);

  return (
    <div className={styles.ChallengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`/icons/${activeChallenge.type}.svg`} alt="xp" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeSuccededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.ChallengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="/icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
