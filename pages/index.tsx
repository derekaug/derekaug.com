import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  faMastodon,
  faGithub,
  faStrava,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const SocialLink = ({ icon, url }: { icon: IconProp; url: string }) => {
  return (
    <a
      rel="me"
      href={url}
      style={{
        display: "inline-flex",
        width: "2.25rem",
        height: "2.25rem",
        marginLeft: "0.25rem",
        marginRight: "0.25rem",
        alignContent: "center",
      }}
    >
      <FontAwesomeIcon style={{ width: "100%", height: "100%" }} icon={icon} />
    </a>
  );
};
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Derek J. Augustine</title>
        <meta
          name="description"
          content="Derek J. Augustine | Dad, Developer, Outdoor Enthusiast"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Derek J. Augustine</h1>
        <h2>Dad, Developer, Outdoor Enthusiast</h2>
        <div>
          <SocialLink url="https://github.com/derekaug" icon={faGithub} />
          <SocialLink
            url="https://lincolnite.net/@derekaug"
            icon={faMastodon}
          />
          <SocialLink
            url="https://www.strava.com/athletes/2526730"
            icon={faStrava}
          />
        </div>
      </main>
    </div>
  );
}
