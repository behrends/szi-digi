import CourseGrid, {
  theoryColors,
  practiceColors,
} from './CourseGrid';

export default function Home() {
  return (
    <div className="px-6">
      <main className="flex flex-col justify-around items-center min-h-screen py-6">
        <h1 className="text-dhbwGrey text-4xl mb-10">
          Block- und Studienpläne am SZI der DHBW Lörrach
        </h1>

        <div className="w-full">
          <CourseGrid
            courses={[
              { name: 'TIF20A', phase: 'theory' },
              { name: 'TIF21A', phase: 'theory' },
              { name: 'TIF21B', phase: 'theory' },
              { name: 'TIF22A', phase: 'theory' },
              { name: 'TIF22B', phase: 'practice' },
            ]}
          />

          <CourseGrid
            courses={[
              { name: 'WWI20A', phase: 'practice' },
              { name: 'WWI21A', phase: 'theory' },
              { name: 'WWI22A', phase: 'theory' },
              { name: 'WWI22B', phase: 'practice' },
            ]}
          />
        </div>

        <div className="flex flex-col w-full justify-end items-end">
          <div className="flex justify-center items-center text-sm mb-3">
            Farben zeigen die aktuelle Phase:
          </div>
          <div
            className={`h-10 p-2 card justify-center items-center shadow-xl mb-3 ${theoryColors}`}
          >
            <div className="text-xs font-bold">
              Theoriephase an der DHBW Lörrach
            </div>
          </div>
          <div
            className={`h-10 p-2 card justify-center items-center shadow-xl ${practiceColors}`}
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
