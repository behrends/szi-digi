import Link from 'next/link';

export default function CourseCard({ course, color }) {
  const hoverColor =
    color === 'dhbwRed' ? 'hover:bg-red-100' : 'hover:bg-gray-100';
  return (
    <Link href={`/courses/${course.name}`} key={course.name}>
      <div
        className={`card p-2 justify-center items-start shadow-xl cursor-pointer border-2 text-${color} ${hoverColor}`}
      >
        <div className="card-title text-xs">{course.name}</div>
      </div>
    </Link>
  );
}
