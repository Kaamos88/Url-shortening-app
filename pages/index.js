import Head from 'next/head'
import styles from '../styles/Home.module.css'

 const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Url Shortening app</title>
        <meta name="description" content="Challeng from frontendmentor.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>It's alive!!!!</h1>
      </main>
     </div>
  )
}

export default Home;
