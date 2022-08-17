import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SZI digi</title>
        <meta
          name="description"
          content="Digitalisierte Prozesse am SZI der DHBW Lörrach"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Digitalisierte Prozesse am SZI der DHBW Lörrach
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.dhbw-loerrach.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; 2022 DHBW Lörrach
        </a>
      </footer>
    </div>
  );
}
