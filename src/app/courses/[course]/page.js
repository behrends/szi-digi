import { sql } from '@vercel/postgres';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowTopRightOnSquareIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline';
import { calcDiffInWeeks } from '@/lib/utils';

async function fetchCourse(name) {
  // TODO: cache locally?
  // fetch data from Postgres (using Vercel's storage)
  const { rows } =
    await sql`SELECT * FROM courses c, periods p WHERE c.id=p.course_id AND name=${name} ORDER BY p.start_date`;

  if (rows.length === 0) return undefined;
  return rows;
}

function ExamDates({ course }) {
  if (course !== 'TIF22A' && course !== 'TIF22B') return null;
  return (
    <table>
      <tr>
        <td>
          Anmeldung 1. Projektarbeit
          <br />
          Mitteilung des gewünschten Schwerpunktes
        </td>
        <td>17.07.23</td>
      </tr>
      <tr>
        <td>
          Abgabe 1. Projektarbeit
          <br />
          Abgabe Reflexionsbericht, Ablaufplan
        </td>
        <td>02.10.23</td>
      </tr>
      <tr>
        <td>Vorbereitung/Briefing 2. Projektarbeit</td>
        <td>Juni 2024</td>
      </tr>
      <tr>
        <td>Anmeldung 2. Projektarbeit</td>
        <td>08.07.24</td>
      </tr>
      <tr>
        <td>
          Abgabe 2. Projektarbeit
          <br />
          Abgabe Reflexionsbericht, Ablaufplan
        </td>
        <td>30.09.24</td>
      </tr>
      <tr>
        <td>Präsentation 2. Projektarbeit</td>
        <td>November 2024</td>
      </tr>
      <tr>
        <td>Abgabe der Studienarbeit/Projekt</td>
        <td>30.03.25</td>
      </tr>
      <tr>
        <td>Anmeldung 3. Projektarbeit</td>
        <td>28.04.25</td>
      </tr>
      <tr>
        <td>Abgabe 3. Projektarbeit</td>
        <td>23.06.25</td>
      </tr>
      <tr>
        <td>Vorbereitung/Briefing Bachelorarbeit</td>
        <td>März 2025</td>
      </tr>
      <tr>
        <td>Anmeldung Bachelorarbeit</td>
        <td>09.06.25</td>
      </tr>
      <tr>
        <td>
          Abgabe Bachelorarbeit
          <br />
          Abgabe Reflexionsbericht, Ablaufplan
        </td>
        <td>01.09.25</td>
      </tr>
    </table>
  );
}

export default async function Course({ params }) {
  const courseName = params.course;
  const periods = await fetchCourse(courseName);

  // this will show the 404 page
  if (!periods) notFound(); // implicit return

  const courseCalName = periods[0].exchange_name ?? periods[0].name;
  const today = new Date();
  let sumTheoryWeeks = 0,
    sumPracticeWeeks = 0;

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
        const { theory, start_date, end_date } = period;

        const weeks = calcDiffInWeeks(start_date, end_date);
        if (theory) sumTheoryWeeks += weeks;
        else sumPracticeWeeks += weeks;
        const timespan = `${start_date.toLocaleDateString('de', {
          dateStyle: 'short',
        })}-${end_date.toLocaleDateString('de', {
          dateStyle: 'short',
        })} (${weeks} Wochen)`;
        let theoryDates, practiceDates;
        if (theory) theoryDates = timespan;
        else practiceDates = timespan;
        // current period is highlighted
        const highlighted =
          start_date <= today && today <= end_date
            ? 'bg-yellow-100'
            : null;
        return (
          <tr
            className={`${
              periods.length === rowNum + 1
                ? 'border-slate-300'
                : 'border-none'
            } ${highlighted}`}
          >
            {rowNum === 0 && (
              <td
                className="text-lg font-bold text-center bg-white"
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
      <Link href="/">
        <HomeModernIcon
          className="absolute top-4 left-4 h-6 w-6 
      text-dhbwRed"
        />
      </Link>
      <h1 className="text-4xl text-dhbwRed">{periods[0].name}</h1>
      <p className="mb-4">
        <a
          className="text-dhbwRed flex"
          href={`https://webmail.dhbw-loerrach.de/owa/calendar/kal-${courseCalName.toLowerCase()}@dhbw-loerrach.de/Kalender/calendar.html`}
          target="_blank"
        >
          Vorlesungskalender öffnen
          <ArrowTopRightOnSquareIcon className="w-4 ml-1" />
        </a>
      </p>
      <h2 className="text-3xl">Blockplan</h2>
      <table className="table table-xs text-lg w-3/4">
        <thead className="text-lg">
          <tr className="border-0">
            <th>Semester</th>
            <th>Studium an der Dualen Hochschule</th>
            <th>Ausbildung im Unternehmen / Urlaub</th>
            <th>Hinweise</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>{`Summe: ${sumTheoryWeeks} Wochen`}</td>
            <td>{`Summe: ${sumPracticeWeeks} Wochen`}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <h3 className="text-2xl">Prüfungsrelevante Termine</h3>
      <p>
        Klausurwoche: jeweils circa die letzte Woche der Theoriephase
      </p>
      <p>
        Die folgenden Termine sind jeweils die späteste Möglichkeit
        zur Anmeldung und zur Abgabe (jeweils bis spätestens 12:00
        Uhr).
      </p>
      <ExamDates course={courseName} />
    </>
  );
}
