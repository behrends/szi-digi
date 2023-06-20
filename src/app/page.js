// import { sql } from '@vercel/postgres';
import CourseTable from '@/components/CourseTable';
import { coursesBySemester } from '@/lib/data';

export default async function Home() {
  // TODO: load data from database
  // fetch data from Postgres (using Vercel's storage)
  // const { rows } = await sql`SELECT * FROM courses`;

  return (
    <div className="px-6">
      <main className="flex flex-col justify-around items-center min-h-screen py-6">
        <h1 className="text-dhbwGrey text-4xl mb-10">
          Infos zu den Kursen am SZI der DHBW Lörrach
        </h1>

        <div className="flex items-center">
          <label htmlFor="semester" className="font-medium mr-2">
            Zeige Kurse mit ihren Phasen in diesem Quartal:
          </label>
          <select id="semester" className="select select-bordered">
            <option selected>
              Q223・April-Juni 2023・Sommersemester
            </option>
            <option>Q323・Juli-September 2023・Sommersemester</option>
            <option>
              Q423・Oktober-Dezember 2023・Sommersemester
            </option>
            <option>Q124・Januar-März 2024・Wintersemester</option>
            <option>Q224・April-Juni 2024・Wintersemester</option>
            <option>Q324・Juli-September 2024・Sommersemester</option>
          </select>
        </div>
        <CourseTable data={coursesBySemester} />
      </main>
    </div>
  );
}
