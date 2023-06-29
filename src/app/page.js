import { sql } from '@vercel/postgres';
import CourseTable from '@/components/CourseTable';
import Timeline from '@/components/Timeline';
import CourseLinks from '@/components/CourseLinks';
import { coursesBySemester } from '@/lib/data';
import { calcDiffInWeeks } from '@/lib/utils';

export default async function Home() {
  // fetch data from Postgres (using Vercel's storage)
  const { rows } =
    await sql`SELECT * FROM courses, periods WHERE courses.id=course_id ORDER BY name ASC;`;

  const timelineRows = rows.map((row) => {
    const { name, theory, semester, start_date, end_date, remarks } =
      row;
    const start = new Date(start_date);
    const end = new Date(end_date);
    const weeks = calcDiffInWeeks(start, end);
    const tooltip = `<div class='p-1 text-base text-center' style='width: 220px;'><p class='text-lg font-bold'>${start.toLocaleDateString(
      'de',
      { dateStyle: 'short' }
    )}-${end.toLocaleDateString('de', {
      dateStyle: 'short',
    })}</p> <p class="text-lg">${semester}. Semester</p><p>${
      theory ? 'Theoriephase' : 'Praxisphase'
    }</p><p class="text-sm">${weeks} Wochen</p><p class="text-sm">${
      remarks ? remarks.join('<br />') : ''
    }</p></div`;
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
    <>
      <h1 className="text-dhbwGrey text-4xl mb-10">
        Infos zu den Kursen am SZI der DHBW Lörrach
      </h1>
      <div className="flex flex-col w-full items-center">
        <Timeline rows={timelineRows} />
        <CourseLinks />
        {/* <label htmlFor="semester" className="font-medium mr-2">
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
              Q423・Oktober-Dezember 2023・Wintersemester
            </option>
            <option>Q124・Januar-März 2024・Wintersemester</option>
            <option>Q224・April-Juni 2024・Sommersemester</option>
            <option>Q324・Juli-September 2024・Sommersemester</option>
          </select> */}
      </div>
      {/* <CourseTable data={coursesBySemester} /> */}
    </>
  );
}
