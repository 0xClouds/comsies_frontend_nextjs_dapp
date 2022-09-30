import styles from "../styles/Artist.module.scss";
import Image from "next/image";
import Sisto from "../public/images/sisto.png";
import Flag from "../public/images/icons/flag";
import ArtistFooter from "./artistFooter";
export default function ArtistInfo({ name }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <h1>Artist</h1>
        <span>Get to know whos behind the project</span>
      </div>
      <div className={styles.about}>
        <Image src={Sisto}></Image>
        <div className={styles.infoContainer}>
          <div className={styles.artistName}>
            <h4>{name}</h4>
            <Flag></Flag>
          </div>
          <p>
            Sisto Hokkate was born on 28th October, 1998, on Spain, Andalusian.
            He is a Non-Binary artist and animator, their pronouns are all.
            <br></br>
            <br></br>
            His hobbies are playing video-games and of course draw! Especially
            digital drawing with his own anime style, mostly we have seen
            pixelart artwork of him but he can make variety of style and
            illustration, vector etc…
            <br></br>
            <br></br> If you wonder where Sisto studied, he did not, an example
            of self-taught person and talent! He is known by being the Murder
            Academy creator and artists, but Sisto have been working for many
            projects, but focusing on Murder Academy he made such a whole
            universe around that, and many projects related like “Murder Academy
            OGs”, “Digital Murder Academy!” and “Murder Academy LGBTI+!”
            <br></br>
            <br></br>
            His dream is made a great fanbase around Cosmies and Murder Academy
            with a great list for merchandise and videogames, even a Manga, who
            knows?…
          </p>
          <ArtistFooter></ArtistFooter>
        </div>
      </div>
    </div>
  );
}
