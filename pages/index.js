import Head from "next/head";
import HomeDesktop from "../components/homeDesktop";
import LeftSidePage from "../components/leftSidePage";
import HomeMobile from "../components/HomeMobile";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Cosmies</title>
        <meta name="Cosmies NFT" content="An NFT collection" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* i honestly forgot why i added this below, but i believe this allows for divs to take up their entire container */}
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
      <div className={styles.mobilePage}>
        <HomeMobile></HomeMobile>
      </div>
      <div className={styles.desktopPage}>
        <HomeDesktop></HomeDesktop>
        <LeftSidePage></LeftSidePage>
      </div>
    </div>
  );
}
