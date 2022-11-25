export default function Home() {
  return (
    <div className="px-6">
      <main className="flex flex-col justify-center items-center min-h-screen py-6">
        <h1 className="text-dhbwRed text-4xl">
          Block- und Studienpläne am SZI der DHBW Lörrach
        </h1>

        <div className="card w-48 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">TIF20A</h2>
          </div>
        </div>
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
