import Carousel from "./carousel";
import styles from "../styles/LeftSidePage.module.scss";

export default function LeftSidePage() {
  return (
    <div className={styles.leftSidePage}>
      <div className={styles.carousel}>
        <Carousel></Carousel>
      </div>
    </div>
  );
}
