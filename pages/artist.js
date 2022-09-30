import styles from "../styles/ArtistPage.module.scss"
import ArtistInfo from "../components/artistInfo";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar"
export default function ArtistPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mobileNav}>
      <MobileNav currentPage="artist"></MobileNav>
      </div>
      <div className={styles.desktopNav}>
        <Navbar></Navbar>
      </div>
      <ArtistInfo name="Sisto"></ArtistInfo>
    </div>
  );
}
``