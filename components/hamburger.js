import styles from "../styles/Hamburger.module.scss"
import { useState } from "react"

export default function Hamburger() {
    const [active, setIsActive] = useState(false)
    return (
        <div className={styles.hamburgerWrapper}>
            <button
                className={styles.hamburgerBtn}
                onClick={() => {
                    setIsActive(!active)
                }}
            >
                <div
                    className={`${styles.hamburger} ${
                        active ? styles.active : null
                    }`}
                ></div>
                <div
                    className={`${styles.hamburger} ${
                        active ? styles.active : null
                    }`}
                ></div>
                <div
                    className={`${styles.hamburger} ${
                        active ? styles.active : null
                    }`}
                ></div>
            </button>
        </div>
    )
}
