export default function Home() {
  const theoryPhaseColors =
    ' text-dhbwRed hover:text-white bg-red-300 hover:bg-red-500';
  const practicePhaseColors =
    'text-dhbwGrey bg-zinc-200 hover:bg-zinc-400';

  return (
    <div className="px-6">
      <main className="flex flex-col justify-around items-center min-h-screen py-6">
        <h1 className="text-dhbwGrey text-4xl mb-10">
          Block- und Studienpläne am SZI der DHBW Lörrach
        </h1>

        <div className="w-full">
          <div className="grid grid-cols-3 gap-4 flex-grow w-full">
            <div
              className={`h-20 card justify-center items-center shadow-xl cursor-pointer ${theoryPhaseColors}`}
            >
              <h2 className="card-title">TIF20A</h2>
            </div>

            <div
              className={`h-20 card justify-center items-center shadow-xl cursor-pointer ${theoryPhaseColors}`}
            >
              <h2 className="card-title">TIF21A</h2>
            </div>

            <div
              className={`h-20 card justify-center items-center shadow-xl cursor-pointer ${theoryPhaseColors}`}
            >
              <h2 className="card-title">TIF21B</h2>
            </div>

            <div
              className={`h-20 card justify-center items-center shadow-xl cursor-pointer ${practicePhaseColors}`}
            >
              <h2 className="card-title">TIF22B</h2>
            </div>
          </div>

          <div className="divider"></div>

          <div className="grid grid-cols-3 gap-4 flex-grow w-full text-dhbwRed">
            <div
              className={`h-20 card justify-center items-center shadow-xl cursor-pointer ${practicePhaseColors}`}
            >
              <h2 className="card-title">WWI20A</h2>
            </div>

            <div
              className={`h-20 card justify-center items-center shadow-xl cursor-pointer ${theoryPhaseColors}`}
            >
              <h2 className="card-title">WWI21A</h2>
            </div>

            <div
              className={`h-20 card justify-center items-center shadow-xl cursor-pointer ${theoryPhaseColors}`}
            >
              <h2 className="card-title">WWI22A</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full">
          <div className="flex justify-center items-center text-sm mr-5">
            Bedeutung der Farben:
          </div>
          <div
            className={`h-10 p-2 card justify-center items-center shadow-xl mr-5 ${theoryPhaseColors}`}
          >
            <div className="text-xs font-bold">
              Theoriephase an der DHBW Lörrach
            </div>
          </div>
          <div
            className={`h-10 p-2 card justify-center items-center shadow-xl ${practicePhaseColors}`}
          >
            <div className="text-xs font-bold">
              Praxisphase im Unternehmen
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
