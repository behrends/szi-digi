import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';
import { calcDiffInWeeks } from '@/lib/utils';

async function fetchCourse(name) {
  // TODO: cache locally?
  // fetch data from Postgres (using Vercel's storage)
  const { rows } =
    await sql`SELECT * FROM courses co, periods WHERE co.id=course_id AND name=${name} ORDER BY start_date`;

  if (rows.length === 0) return undefined;
  return rows;
}

export default async function Course({ params }) {
  const courseName = params.course;
  const periods = await fetchCourse(courseName);

  // this will show the 404 page
  if (!periods) notFound(); // implicit return

  const courseCalName = periods[0].exchange_name ?? periods[0].name;

  // group periods by semester
  let periodsBySemester = periods.reduce(function (groups, current) {
    const { semester } = current;
    groups[semester] = groups[semester] ?? [];
    groups[semester].push(current);
    return groups;
  }, {});

  // generate table rows with semester spanning multiple rows
  const rows = Object.entries(periodsBySemester).flatMap(
    ([semester, periods]) =>
      periods.map((period, rowNum) => {
        const { start_date, end_date } = period;

        const weeks = calcDiffInWeeks(start_date, end_date);
        const timespan = `${start_date.toLocaleDateString('de', {
          dateStyle: 'short',
        })}-${end_date.toLocaleDateString('de', {
          dateStyle: 'short',
        })} (${weeks} Wochen)`;
        let theoryDates, practiceDates;
        if (period.theory) theoryDates = timespan;
        else practiceDates = timespan;
        return (
          <tr
            className={
              periods.length === rowNum + 1
                ? 'border-dhbwRed'
                : 'border-none'
            }
          >
            {rowNum === 0 && (
              <td
                className="text-lg font-bold text-center"
                rowSpan={periods.length}
              >
                {semester}
              </td>
            )}
            <td className="text-base">{theoryDates}</td>
            <td className="text-base">{practiceDates}</td>
            <td className="text-base">
              {period.remarks &&
                period.remarks.map((remark) => <p>{remark}</p>)}
            </td>
          </tr>
        );
      })
  );

  return (
    <>
      <h1 className="text-4xl">{periods[0].name}</h1>
      <p>
        <a
          className="text-dhbwRed"
          href={`https://webmail.dhbw-loerrach.de/owa/calendar/kal-${courseCalName.toLowerCase()}@dhbw-loerrach.de/Kalender/calendar.html`}
          target="_blank"
        >
          Vorlesungskalender öffnen (externer Link)
        </a>
      </p>
      <h2 className="text-3xl">Blockplan</h2>
      <table className="table table-xs text-lg w-3/4">
        <thead className="text-lg">
          <tr className="border-dhbwRed">
            <th>Semester</th>
            <th>Studium an der Dualen Hochschule</th>
            <th>Ausbildung im Unternehmen / Urlaub</th>
            <th>Hinweise</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}
