import { useContext } from "react";
import styles from "../../styles/components/Profile.module.css";
import { ChallengeContext } from "../contexts/ChallengeContext";

export default function () {
  const { level } = useContext(ChallengeContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/yankev12.png" alt="" />
      <div>
        <strong>Yankev Mineo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          level {level}
        </p>
      </div>
    </div>
  );
}
