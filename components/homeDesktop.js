import styles from "../styles/HomeDesktop.module.scss";
import Navbar from "./navbar";
import Button from "./button";
import Footer from "./footer";

export default function HomeDesktop() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainInfo}>
        <div className={styles.nav}>
          <Navbar currentPage={"home"} />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.infoHeader}>Cosmies</h1>
          <p className={styles.infoText}>
            Crash landing on earth these creatures spread around the globe
            looking for Adventurers to guide them.
          </p>
          <div className={styles.button}>
            <Button text="Mint Soon!" linkSrc="/" />
          </div>
        </div>
        <div className={styles.footer}>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
