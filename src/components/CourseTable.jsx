import CourseCard from '@/components/CourseCard';

export default function CourseTable({ data }) {
  return (
    <table className="table-lg">
      <thead>
        <tr>
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
          <>
            <tr key={item.semester}>
              <td
                className="text-lg font-medium text-center text-dhbwGrey py-1"
                colSpan="2"
              >
                {item.semester}. Semester
              </td>
            </tr>
            <tr key={item.semester}>
              <td className="align-top pt-1">
                {item.theory.map((course) => (
                  <CourseCard
                    key={course.name}
                    course={course}
                    color="dhbwRed"
                  />
                ))}
              </td>
              <td className="align-top pt-1">
                {item.practice.map((course) => (
                  <CourseCard
                    key={course.name}
                    course={course}
                    color="dhbwGrey"
                  />
                ))}
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
}
