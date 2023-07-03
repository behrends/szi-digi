import Timeline from '@/components/TimelineD3';
import { getCourses, getCoursesAndPeriods } from '@/lib/queries';

export default async function Page() {
  const coursesAndPeriods = await getCoursesAndPeriods();
  const courses = await getCourses();

  let domainStart = new Date(),
    domainEnd = new Date();
  const data = coursesAndPeriods.map((row) => {
    const { name, start_date, end_date, theory } = row;
    const start = new Date(start_date);
    const end = new Date(end_date);
    if (start < domainStart) domainStart = start;
    if (end > domainEnd) domainEnd = end;
    return { course: name, start, end, theory };
  });

  return (
    <Timeline
      courses={courses}
      data={data}
      domainStart={domainStart}
      domainEnd={domainEnd}
    />
  );
}
