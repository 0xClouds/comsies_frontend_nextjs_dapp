import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Hamburger from "./hamburger"
import styles from "../styles/MobileNav.module.scss"
import Logo from "../public/images/logo.png"

export default function MobileNav({ currentPage }) {
    {
        /* this is a light switch for the hamburger menu */
    }
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={styles.mobileNavWrapper}>
            <div className={styles.navHeader}>
                <div>
                    <Image
                        src={Logo}
                        layout="fixed"
                        width={75}
                        height={75}
                    ></Image>
                </div>
                <div
                    className={styles.hamburger}
                    onClick={() => {
                        setIsActive(!isActive)
                    }}
                >
                    <Hamburger></Hamburger>
                </div>
            </div>
            <div className={`${isActive ? styles.navList : styles.active}`}>
                <ul>
                    <li
                        className={`${
                            currentPage == "home"
                                ? styles.underlined
                                : undefined
                        }`}
                    >
                        <Link href="/">Home</Link>
                    </li>
                    <li
                        className={`${
                            currentPage == "collection"
                                ? styles.underlined
                                : undefined
                        }`}
                    >
                        <Link href="/collection">Collection</Link>
                    </li>
                    <li
                        className={`${
                            currentPage == "artist"
                                ? styles.underlined
                                : undefined
                        }`}
                    >
                        <Link href="/artist">Artist</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
