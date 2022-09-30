import styles from "../styles/Button.module.scss";
import ArrowRight from "../public/images/icons/arrow-right";
import OpenSea from "../public/images/icons/opensea";
import { useState } from "react";
import Link from "next/link";

function Button({ text, openSea, linkSrc }) {
  const [Color, setColor] = useState(false);
  return (
    <div>
      <a href={`${linkSrc}`}>
        <button
          className={styles.button}
          onMouseEnter={() => setColor(true)}
          onMouseLeave={() => setColor(false)}
        >
          {openSea ? (
            <span className={styles.icon}>
              <OpenSea
                fill={`${Color ? "white" : "black"}`}
                height="13"
              ></OpenSea>
            </span>
          ) : null}
          {text}
          <span className={styles.rightArrow}>
            <ArrowRight fill={`${Color ? "white" : "black"}`} />
          </span>
        </button>
      </a>
    </div>
  );
}

export default Button;
