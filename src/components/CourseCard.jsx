export default function CourseCard({ course, color }) {
  return (
    <div
      className={`card p-2 mb-2 justify-center items-start  shadow-xl cursor-pointer border-2 border-${color} text-${color}`}
    >
      <div className="card-title">{course.name}</div>
      <div className="text-sm mb-1">
        {course.data?.start.toLocaleDateString('de')}-
        {course.data?.end.toLocaleDateString('de')}
      </div>
      <div className="text-sm">
        {course.data?.dates ? 'Termine:' : 'Keine Termine'}
      </div>
      {course.data?.dates?.map((d) => (
        <div key={d.date} className="pl-4 text-sm">
          {`${
            typeof d.date === 'string'
              ? d.date
              : d.date.toLocaleDateString('de')
          } ${d.description}`}
        </div>
      ))}
    </div>
  );
}
