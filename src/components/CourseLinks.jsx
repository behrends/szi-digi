import CourseCard from '@/components/CourseCard';

export default function CourseLinks() {
  // TODO get real course data
  const courses = [
    'TIF20A',
    'TIF21A',
    'TIF21B',
    'TIF22A',
    'TIF22B',
    'TIF23A',
    'TIF23B',
    'WWI20A',
    'WWI21A',
    'WWI22A',
    'WWI23A',
    'WWI23B',
  ];
  return (
    <div className="flex flex-wrap">
      <span className="py-1 mr-2">Gehe zu Kurs:</span>
      {courses.map((course) => {
        return (
          <CourseCard course={{ name: course }} color="dhbwRed" />
        );
      })}
    </div>
  );
}
