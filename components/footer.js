import styles from "../styles/Footer.module.scss";
import Image from "next/image";
import Twitter from "../public/images/icons/twitter";
import Frontier from "../public/images/icons/frontier";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.informationContainer}>
        <span>Follow us</span>
        <span>Powered by</span>
      </div>
      <div className={styles.logoContainer}>
        <ul className={styles.socialsList}>
          <li className={styles.listItems}>
            <a href="https://twitter.com/notifications">
              <Twitter />
            </a>
          </li>
        </ul>
        <span className={styles.imageContainer}>
          <Frontier />
        </span>
      </div>
    </div>
  );
}
