import { sql } from '@vercel/postgres';
import Timeline from '@/components/Timeline';
import CourseLinks from '@/components/CourseLinks';
import { calcDiffInWeeks } from '@/lib/utils';

async function getCourses() {
  const { rows } = await sql`SELECT * FROM courses;`;
  return rows;
}

export default async function Home() {
  // fetch data from Postgres (using Vercel's storage)
  const { rows } =
    await sql`SELECT * FROM courses, periods WHERE courses.id=course_id ORDER BY name ASC;`;

  const courses = await getCourses();

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
      theory ? '#E2001A' : '#5C6971', // TODO: use tailwind config or css var
      start,
      end,
    ];
  });

  return (
    <>
      <h1 className="text-4xl mb-3 text-dhbwRed">
        SZI — DHBW Lörrach
      </h1>
      <h2 className="text-3xl mb-1">
        Übersicht der Phasen aller Kurse
      </h2>
      <div className="flex flex-col w-full items-center">
        <Timeline rows={timelineRows} courses={courses} />
        <CourseLinks courses={courses} />
      </div>
    </>
  );
}
