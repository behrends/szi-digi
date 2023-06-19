import CourseCard from '@/components/CourseCard';

export default function CourseTable({ data }) {
  return (
    <table className="table-lg">
      <thead>
        <tr>
          <th className="text-xl">Semester</th>
          <th className="text-3xl text-dhbwRed">
            DHBW Lörrach (Theorie)
          </th>
          <th className="text-3xl text-dhbwGrey">
            Unternehmen (Praxis)
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.semester}>
            <td className="text-xl font-bold">{item.semester}</td>
            <td>
              {item.theory.map((course) => (
                <CourseCard
                  key={course.name}
                  course={course}
                  color="dhbwRed"
                />
              ))}
            </td>
            <td>
              {item.practice.map((course) => (
                <CourseCard
                  key={course.name}
                  course={course}
                  color="dhbwGrey"
                />
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
