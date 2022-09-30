import MobileNav from "./mobileNav";
import Footer from "./footer";
import Evolution from "./evolution";

import styles from "../styles/HomeMobile.module.scss";

export default function HomeMobile() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <MobileNav currentPage="home"></MobileNav>
      </div>
      <Evolution></Evolution>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
