import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Derek J. Augustine</title>
        <meta
          name="description"
          content="Derek J. Augustine | Developer, Cyclist, Dad"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Derek J. Augustine</h1>
      </main>
    </div>
  );
}
