import styles from "../../styles/components/Profile.module.css";

export default function () {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/yankev12.png" alt="" />
      <div>
        <strong>Yankev Mineo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          level 1
        </p>
      </div>
    </div>
  );
}
