import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowTopRightOnSquareIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import ExamDates from "@/components/ExamDates";
import { calcDiffInWeeks } from "@/lib/utils";
import { getCoursesAndPeriodsByName, getExamDatesByName } from "@/lib/queries";

export default async function Course({ params }) {
  const courseName = params.course;
  const periods = await getCoursesAndPeriodsByName(courseName);
  const examDates = await getExamDatesByName(courseName);

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
        const timespan = `${start_date.toLocaleDateString("de", {
          dateStyle: "short",
        })}-${end_date.toLocaleDateString("de", {
          dateStyle: "short",
        })} (${weeks} Wochen)`;
        let theoryDates, practiceDates;
        if (theory) theoryDates = timespan;
        else practiceDates = timespan;
        // current period is highlighted
        const highlighted =
          start_date <= today && today <= end_date ? "bg-yellow-100" : null;
        return (
          <tr
            className={`${
              periods.length === rowNum + 1
                ? "border-b border-slate-300"
                : "border-none"
            } ${highlighted}`}
          >
            {rowNum === 0 && (
              <td
                className="bg-white text-center text-lg font-bold"
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
      }),
  );

  return (
    <>
      <Link href="/">
        <HomeModernIcon
          className="absolute left-4 top-4 h-6 w-6 
      text-dhbwRed"
        />
      </Link>
      <h1 className="text-4xl text-dhbwRed">{periods[0].name}</h1>
      <p className="mb-4">
        <a
          className="flex text-dhbwRed"
          href={`https://webmail.dhbw-loerrach.de/owa/calendar/kal-${courseCalName.toLowerCase()}@dhbw-loerrach.de/Kalender/calendar.html`}
          target="_blank"
        >
          Vorlesungskalender öffnen
          <ArrowTopRightOnSquareIcon className="ml-1 w-4" />
        </a>
      </p>
      <h2 className="text-3xl">Blockplan</h2>
      <table className="w-3/4 table-auto text-lg">
        <thead className="text-lg text-dhbwGrey">
          <tr className="border-none">
            <th>Semester</th>
            <th className="hidden lg:table-cell">Studium an der DHBW</th>
            <th className="table-cell lg:hidden">DHBW</th>
            <th className="hidden lg:table-cell">
              Ausbildung im Unternehmen / Urlaub
            </th>
            <th className="table-cell lg:hidden">Unternehmen</th>
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
      {examDates && <ExamDates examDates={examDates} />}
    </>
  );
}
