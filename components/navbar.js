import styles from "../styles/Navbar.module.scss";
import TopButtons from "./topButtons";
import logo from "../public/images/logo.png";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ currentPage }) {
  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.navImgContainer}>
          <Image
            className={styles.navImg}
            src={logo}
            layout="fixed"
            width={200}
            height={180}
            alt="placeholder"
          ></Image>
        </li>
        <Link href="/">
          <li
            className={`${styles.navItem} ${
              currentPage === "home" ? styles.navPage : undefined
            }`}
          >
            <a
              className={`${
                currentPage !== "home" ? styles.navLink : undefined
              }`}
            >
              Home
            </a>
          </li>
        </Link>
        <Link href="/collection">
          <li
            className={`${styles.navItem} ${
              currentPage === "collection" ? styles.navPage : undefined
            }`}
          >
            <a
              className={`${
                currentPage !== "collection" ? styles.navLink : undefined
              }`}
            >
              Collection
            </a>
          </li>
        </Link>
        <Link href="/artist">
          <li
            className={`${styles.navItem} ${
              currentPage === "artist" ? styles.navPage : undefined
            }`}
          >
            <a
              className={`${
                currentPage !== "artist" ? styles.navLink : undefined
              }`}
            >
              Artist
            </a>
          </li>
        </Link>
      </ul>
      <TopButtons></TopButtons>
    </div>
  );
}
