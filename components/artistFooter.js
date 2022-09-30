import Link from "next/link";
import Opensea from "../public/images/icons/opensea";
import Twitter from "../public/images/icons/twitter";
import styles from "../styles/ArtistFooter.module.scss";
export default function ArtistFooter() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <p>Connect to artist</p>
      </div>
      <div className={styles.socialLinks}>
        <ul>
          <li>
            <Link href="">
              <div className={styles.socialLink}>
                <a>
                  <div className={styles.socialImg}>
                    <Twitter></Twitter>
                  </div>
                  sisto_hkkt
                </a>
              </div>
            </Link>
          </li>
          <li>
            <Link href="">
              <div className={styles.socialLink}>
                <a>
                  <div className={styles.socialImg}>
                    <Twitter></Twitter>
                  </div>
                  murderacademyNFT
                </a>
              </div>
            </Link>
          </li>
          <li>
            <Link href="">
              <div className={styles.socialLink}>
                <a>
                  <div className={styles.socialImg}>
                    <Opensea fill="black"></Opensea>
                  </div>
                  sisto
                </a>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
