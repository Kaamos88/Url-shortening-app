import Head from "next/head";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import SearchBar from "../components/SearchBar/SearchBar";
import s from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={s.container}>
      <Head>
        <title>Url Shortening app</title>
        <meta name="description" content="Challeng from frontendmentor.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={s.header}>
          <div className={s.wrapper}>
            <Nav />
            <Header />
            <SearchBar />
          </div>
        </section>
        <section className={s.statistics}>s</section>
      </main>
    </div>
  );
};

export default Home;
