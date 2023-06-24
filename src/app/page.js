import { sql } from '@vercel/postgres';
import CourseTable from '@/components/CourseTable';
import Timeline from '@/components/Timeline';
import { coursesBySemester } from '@/lib/data';

export default async function Home() {
  // fetch data from Postgres (using Vercel's storage)
  const { rows } =
    await sql`SELECT * FROM courses c, periods p WHERE c.id=p.course_id;`;
  console.log(rows);

  const timelineRows = rows.map((row) => {
    const { name, theory, semester, start_date, end_date } = row;
    const start = new Date(start_date);
    const end = new Date(end_date);
    const tooltip = `${start.toLocaleDateString(
      'de'
    )}-${end.toLocaleDateString('de')} <br/> ${semester}. Semester`;
    return [
      name,
      '',
      tooltip,
      theory ? '#E2001A' : '#5C6971',
      start,
      end,
    ];
  });

  return (
    <div className="px-6">
      <main className="flex flex-col justify-start items-center min-h-screen py-6">
        <h1 className="text-dhbwGrey text-4xl mb-10">
          Infos zu den Kursen am SZI der DHBW Lörrach
        </h1>
        <div className="flex flex-col w-full items-center">
          <Timeline rows={timelineRows} />
          <label htmlFor="semester" className="font-medium mr-2">
            Zeige Kurse mit ihren Phasen in diesem Quartal:
          </label>
          <select
            id="semester"
            className="select select-bordered select-primary select-sm"
          >
            <option selected>
              Q223・April-Juni 2023・Sommersemester (aktuelles
              Quartal)
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
