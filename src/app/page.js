import CourseLinks from '@/components/CourseLinks';
import PeriodsChart from '@/components/PeriodsChart';
import NextDates from '@/components/NextDates';
import {
  preload,
  getCourses,
  getCoursesAndPeriods,
  getExamDates,
  getMaxPeriodEnd,
} from '@/lib/queries';

export default async function Page() {
  preload();
  // TODO load data at build time (changes infrequently)?
  const courses = await getCourses();
  const coursesAndPeriods = await getCoursesAndPeriods();
  const end = await getMaxPeriodEnd();
  const nextDates = await getExamDates();
  const start = new Date(); // TODO: immer von heute starten?

  // extract relevant columns and simplify some attribute names
  const periodData = coursesAndPeriods.map((row) => {
    const { name, start_date, end_date, semester, theory, remarks } =
      row;
    const start = new Date(start_date);
    const end = new Date(end_date);
    return { course: name, start, end, semester, theory, remarks };
  });

  return (
    <>
      <h1 className="text-4xl mb-3 text-dhbwRed">
        SZI — DHBW Lörrach
      </h1>
      <h2 className="text-3xl mb-3">
        Übersicht der Phasen aller Kurse
      </h2>
      <div className="flex flex-col w-full items-center">
        <PeriodsChart periods={periodData} start={start} end={end} />
        <CourseLinks courses={courses} />
        <NextDates dates={nextDates} />
      </div>
    </>
  );
}
