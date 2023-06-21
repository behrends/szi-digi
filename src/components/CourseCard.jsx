import Link from 'next/link';

export default function CourseCard({ course, color, showDates }) {
  const hoverColor =
    color === 'dhbwRed' ? 'hover:bg-red-100' : 'hover:bg-gray-100';
  return (
    <Link href={`/courses/${course.name}`} key={course.name}>
      <div
        className={`card p-2 mb-2 justify-center items-start shadow-xl cursor-pointer border-2 text-${color} ${hoverColor}`}
      >
        <div className="card-title">{course.name}</div>
        {showDates && (
          <div className="text-dhbwGrey">
            <div className="text-sm font-medium mb-1">
              {course.data?.start.toLocaleDateString('de')}-
              {course.data?.end.toLocaleDateString('de')}
            </div>
            <div className="text-xs">
              {course.data?.dates ? 'Termine:' : 'Keine Termine'}
            </div>
            {course.data?.dates?.map((d) => (
              <div key={d.date} className="pl-4 text-xs">
                {`${
                  typeof d.date === 'string'
                    ? d.date
                    : d.date.toLocaleDateString('de')
                } ${d.description}`}
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
