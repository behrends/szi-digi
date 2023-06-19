import { sql } from '@vercel/postgres';
import CourseGrid, {
  theoryColors,
  practiceColors,
} from '@/components/CourseGrid';

export default async function Home() {
  // fetch data from Postgres (using Vercel's storage)
  const { rows } = await sql`SELECT * FROM courses`;

  const coursesTIF = rows
    .filter((course) => course.name.startsWith('TIF'))
    .map((course) => ({
      name: course.name,
      phase:
        Math.floor(Math.random() * 10) < 5 ? 'practice' : 'theory',
    }));

  const coursesWWI = rows
    .filter((course) => course.name.startsWith('WWI'))
    .map((course) => ({
      name: course.name,
      phase:
        Math.floor(Math.random() * 10) < 5 ? 'practice' : 'theory',
    }));

  return (
    <div className="px-6">
      <main className="flex flex-col justify-around items-center min-h-screen py-6">
        <h1 className="text-dhbwGrey text-4xl mb-10">
          Infos zu den Kursen am SZI der DHBW Lörrach
        </h1>

        <div className="w-full">
          <CourseGrid courses={coursesTIF} />

          <CourseGrid courses={coursesWWI} />
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
          &copy; 2023 DHBW Lörrach
        </a>
      </footer>
    </div>
  );
}
