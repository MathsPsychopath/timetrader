import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TimeTrader</title>
        <meta
          name="description"
          content="Higher or Lower, but with stock time periods."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav></nav>
    </div>
  );
};

export default Home;
