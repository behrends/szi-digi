import Link from 'next/link';

// TODO: is there a better location for stuff like this?
export const theoryColors =
  'text-dhbwRed hover:text-white bg-red-300 hover:bg-red-500';
export const practiceColors =
  'text-dhbwGrey bg-zinc-200 hover:bg-zinc-400';

export default function CourseGrid({ courses }) {
  return (
    <div className="grid grid-cols-3 gap-4 flex-grow w-full mb-20">
      {courses.map((course) => {
        const phaseColors =
          course.phase === 'theory' ? theoryColors : practiceColors;
        return (
          <Link href={`/courses/${course.name}`} key={course.name}>
            <div
              className={`h-20 card justify-center items-center shadow-xl cursor-pointer ${phaseColors}`}
            >
              <h2 className="card-title">{course.name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
