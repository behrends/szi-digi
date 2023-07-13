import CourseCard from '@/components/CourseCard';

export default function CourseLinks({ courses }) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="py-1">Gehe zu Kurs:</span>
      {courses.map((course) => {
        return (
          <CourseCard
            key={course.id}
            course={{ name: course.name }}
            color="dhbwRed"
          />
        );
      })}
    </div>
  );
}
