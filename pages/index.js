import Head from 'next/head';

export default function Home() {
  return (
    <div className="px-6">
      <Head>
        <title>SZI digi</title>
        <meta
          name="description"
          content="Digitalisierte Prozesse am SZI der DHBW Lörrach"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center min-h-screen py-6">
        <h1 className="text-dhbwRed text-6xl">
          Digitalisierte Prozesse am SZI der DHBW Lörrach
        </h1>
      </main>

      <footer className="flex justify-center items-center border-t border-slate-200 py-6">
        <a
          className="text-dhbwRed"
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
