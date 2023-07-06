import CourseLinks from '@/components/CourseLinks';
import Timeline from '@/components/Timeline';
import {
  preload,
  getCourses,
  getCoursesAndPeriods,
} from '@/lib/queries';

export default async function Page() {
  preload();
  const coursesAndPeriods = await getCoursesAndPeriods();
  const courses = await getCourses();

  let domainStart = new Date(),
    domainEnd = new Date();
  const data = coursesAndPeriods.map((row) => {
    const { name, start_date, end_date, semester, theory, remarks } =
      row;
    const start = new Date(start_date);
    const end = new Date(end_date);
    if (start < domainStart) domainStart = start;
    if (end > domainEnd) domainEnd = end;
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
        <Timeline
          courses={courses.map((course) => course.name)}
          data={data}
          domainStart={domainStart}
          domainEnd={domainEnd}
        />
        <CourseLinks courses={courses} />
      </div>
    </>
  );
}
