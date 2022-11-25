export default function Home() {
  return (
    <div className="px-6">
      <main className="flex flex-col justify-center items-center min-h-screen py-6">
        <h1 className="text-dhbwGrey text-4xl">
          Block- und Studienpläne am SZI der DHBW Lörrach
        </h1>

        <div className="divider"></div>

        <div className="w-full">
          <div className="grid grid-cols-3 gap-4 flex-grow w-full text-dhbwRed">
            <div className="h-20 card bg-zinc-200 hover:bg-zinc-400 rounded-box justify-center items-center shadow-xl cursor-pointer">
              <h2 className="card-title">TIF20A</h2>
            </div>

            <div className="h-20 hover card bg-zinc-200 hover:bg-zinc-400 rounded-box justify-center items-center shadow-xl cursor-pointer">
              <h2 className="card-title">TIF22B</h2>
            </div>

            <div className="h-20 card bg-zinc-200 hover:bg-zinc-400 rounded-box justify-center items-center shadow-xl cursor-pointer">
              <h2 className="card-title">WWI22B</h2>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex justify-center items-center border-t border-slate-200 py-6">
        <a
          className="text-dhbwGrey"
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
