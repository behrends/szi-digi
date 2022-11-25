import { notFound } from 'next/navigation';

async function fetchCourse(name) {
  // TODO replace with real fetch (from supabase?)
  const data = require('/db.json');
  const courseList = data.courses.filter(
    (course) => course.name === name
  );
  if (courseList.length === 0) return undefined;
  return courseList[0];
  /*
  let response = await fetch(
    `https://my-json-server.typicode.com/behrends/szi-digi/courses?name=${name}`
  );
  // TODO: better error handling instead of returning undefined
  // --> e.g. throw and handle error in case of network error
  if (!response.ok) return undefined;
  const courseArray = await response.json();

  // no course found
  if (courseArray.length === 0) return undefined;
  return courseArray[0];
  */
}

export default async function Course({ params }) {
  const courseName = params.course;
  const course = await fetchCourse(courseName);

  // this will show the 404 page
  if (!course) notFound(); // implicit return

  return (
    <>
      <h1>{course.name}</h1>
      <p>Id: {course.id}</p>
      <p>Semester: {course.semester}</p>
    </>
  );
}
