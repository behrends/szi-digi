import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';

async function fetchCourse(name) {
  // TODO: cache locally?
  // fetch data from Postgres (using Vercel's storage)
  const { rows } =
    await sql`SELECT * FROM courses WHERE name=${name}`;

  if (rows.length === 0) return undefined;
  return rows[0];
}

export default async function Course({ params }) {
  const courseName = params.course;
  const course = await fetchCourse(courseName);

  // this will show the 404 page
  if (!course) notFound(); // implicit return

  return (
    <>
      <h1 className="text-4xl">{course.name}</h1>
      <p>Id: {course.id}</p>
      <p>Semester: TODO</p>
      <p>
        <a
          className="text-dhbwRed"
          href={`https://webmail.dhbw-loerrach.de/owa/calendar/kal-${course.name.toLowerCase()}@dhbw-loerrach.de/Kalender/calendar.html`}
          target="_blank"
        >
          Vorlesungskalender
        </a>
      </p>
      <div className="text-red-900">TODO</div>
      <h2 className="text-2xl">Termine</h2>
      <ul>
        <li>aktuell 2. Semester, Theorie an der DHBW Lörrach</li>
        <li>
          01.07.23 &mdash; Beginn der Praxisphase im Unternehmen (2.
          Semester)
          <ul className="pl-8">
            <li>17.07.23 &mdash; Anmeldung 1. Projektarbeit</li>
            <li>
              17.07.23 &mdash; Mitteilung des gewählten Schwerpunkts
            </li>
          </ul>
        </li>
        <li>
          01.10.23 &mdash; 3. Semesters, Theorie an der DHBW Lörrach
        </li>
      </ul>
    </>
  );
}
