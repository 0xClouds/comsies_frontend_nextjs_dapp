import Image from "next/image";
import styles from "../styles/Evolution.module.scss";
import { images } from "./images";

export default function Evolution() {
  // const randomIndex = Math.floor(Math.random() * 9);
  return (
    <div className={styles.jambis}>
      <div className={`${styles.jambi} ${styles.first}`}>
        <Image src={images[0].v1} width="400" height="400" alt={images[0].name}></Image>
      </div>
      <div className={`${styles.jambi} ${styles.second}`}>
        <Image src={images[0].v2} width="400" height="400" alt={images[0].name}></Image>
      </div>
      <div className={`${styles.jambi} ${styles.third}`}>
        <Image src={images[0].v3} alt={images[0].name}></Image>
      </div>
    </div>
  );
}
