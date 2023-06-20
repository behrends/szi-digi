'use client';
import { useState } from 'react';
import CourseCard from '@/components/CourseCard';

export default function CourseTable({ data }) {
  const [showDates, toggleDates] = useState(false);
  return (
    <div className="flex flex-col w-fit">
      <div className="flex justify-center">
        <label className="cursor-pointer label">
          <span className="label-text font-medium mr-1">
            Termine anzeigen
          </span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={showDates}
            onChange={() => toggleDates(!showDates)}
          />
        </label>
      </div>
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
                      showDates={showDates}
                    />
                  ))}
                </td>
                <td className="align-top pt-1">
                  {item.practice.map((course) => (
                    <CourseCard
                      key={course.name}
                      course={course}
                      color="dhbwGrey"
                      showDates={showDates}
                    />
                  ))}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
