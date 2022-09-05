import Head from "next/head";
import Nav from "../components/Nav/Nav";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Url Shortening app</title>
        <meta name="description" content="Challeng from frontendmentor.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
      </main>
    </div>
  );
};

export default Home;
