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
      <p>
        <a
          className="text-dhbwRed"
          href={`https://webmail.dhbw-loerrach.de/owa/calendar/kal-${course.name.toLowerCase()}@dhbw-loerrach.de/Kalender/calendar.html`}
          target="_blank"
        >
          Vorlesungskalender öffnen (externer Link)
        </a>
      </p>
      <div className="text-red-900">TODO: weitere Infos anzeigen</div>
    </>
  );
}
