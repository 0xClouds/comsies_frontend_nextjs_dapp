import Button from "../components/button";
import styles from "../styles/topButtons.module.scss";

export default function TopButtons() {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.firstButton}>
        <Button text="OpenSea" openSea linkSrc="/"></Button>
      </div>
      <Button text="Mint Soon!" linkSrc="/"></Button>
    </div>
  );
}
