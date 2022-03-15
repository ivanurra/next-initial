import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>Home</h1>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Go to <Link href="/">Home</Link>
        </h1>
      </main>
    </div>
  );
}
