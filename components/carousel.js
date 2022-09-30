import styles from "../styles/Carousel.module.scss";
import { useRef, useCallback, useState, useEffect } from "react";
import Image from "next/future/image";
import EmblaButton from "./emblaButton";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Jambi from "../public/images/cosmies-gif/baby_jambi.gif";
import Grassol from "../public/images/cosmies-gif/baby-grassol.gif";
import Birdien from "../public/images/cosmies-gif/baby-birdien.gif";
import Bearrelly from "../public/images/cosmies-gif/baby-bearrelly.gif";
import Ghostear from "../public/images/cosmies-gif/baby-ghostear.gif";
import Glacepom from "../public/images/cosmies-gif/baby-glacepom.gif";
import Marzoiden from "../public/images/cosmies-gif/baby-marzoiden.gif";
import Psykear from "../public/images/cosmies-gif/baby-psykear.gif";
import Saburaku from "../public/images/cosmies-gif/baby-saburaku.gif";
import Slimemils from "../public/images/cosmies-gif/baby-slimemils.gif";

const slides = [
  Jambi,
  Grassol,
  Birdien,
  Bearrelly,
  Ghostear,
  Glacepom,
  Marzoiden,
  Psykear,
  Saburaku,
  Slimemils,
];

export default function Carousel() {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div key={index} className={styles.embla__slide}>
              <Image
                src={slide}
                className={styles.mainImg}
                alt="carousel of the 10 cosmies"
              />
            </div>
          ))}
        </div>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <EmblaButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => {
                scrollTo(index);
                autoplay.current.reset();
              }}
            ></EmblaButton>
          ))}
        </div>
      </div>
    </div>
  );
}
