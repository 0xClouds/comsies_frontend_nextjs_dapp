import styles from "../styles/Collection.module.scss";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";
import CosmieInfo from "../components/cosmieInfo";
import ArrowRight from "../public/images/icons/arrow-right";
import Image from "next/image";
import { useState } from "react";
import { images } from "../components/images";

export default function CollectionPage() {
  const [openModal, setOpenModal] = useState(false);
  const [imgIndex, setImgIndex] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.mobileNav}>
        <MobileNav currentPage="collection"></MobileNav>
      </div>

      <div className={styles.desktopNav}>
        <div className={styles.navBar}>
          <Navbar currentPage="collection"></Navbar>
        </div>
      </div>
      <div className={styles.header}>
        <h1>Collection</h1>
        <p> browse cosmies and their kinds</p>
      </div>

      <div className={styles.imagesContainer}>
        {images.map((image, index) => (
          <div className={styles.images} key={index}>
            <div
              className={styles.cosmies}
              onClick={() => {
                setImgIndex(index);
                setOpenModal(true);
              }}
              onMouseEnter={() => setImgIndex(index)}
            >
              <Image src={image.src} alt={image.name}></Image>
            </div>
            <div className={styles.names}>
              <span>{image.name}</span>
              <div
                className={
                  imgIndex != index ? styles.arrowHide : styles.arrowShow
                }
              >
                <ArrowRight fill="black"></ArrowRight>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openModal && (
        <CosmieInfo
          index={imgIndex}
          closeModal={setOpenModal}
          v="v1"
        ></CosmieInfo>
      )}
    </div>
  );
}
