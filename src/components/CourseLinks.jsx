import CourseCard from '@/components/CourseCard';

export default function CourseLinks({ courses }) {
  return (
    <div className="flex flex-wrap">
      <span className="py-1 mr-2">Gehe zu Kurs:</span>
      {courses.map((course) => {
        return (
          <CourseCard
            course={{ name: course.name }}
            color="dhbwRed"
          />
        );
      })}
    </div>
  );
}
