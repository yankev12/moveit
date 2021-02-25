import { useContext } from "react";
import styles from "../../styles/components/CompletedChallenges.module.css";
import { ChallengeContext } from "../contexts/ChallengeContext";
export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengeContext);
  return (
    <div className={styles.completedChalengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
