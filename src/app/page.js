// import { sql } from '@vercel/postgres';
import CourseTable from '@/components/CourseTable';
import { coursesBySemester } from '@/lib/data';

export default async function Home() {
  // TODO: load data from database
  // fetch data from Postgres (using Vercel's storage)
  // const { rows } = await sql`SELECT * FROM courses`;

  return (
    <>
      <select className="select select-bordered w-full max-w-md">
        <option selected>
          Q223・April-Juni 2023・Sommersemester
        </option>
        <option>Q323・Juli-September 2023・Sommersemester</option>
        <option>Q423・Oktober-Dezember 2023・Sommersemester</option>
        <option>Q124・Januar-März 2024・Wintersemester</option>
        <option>Q224・April-Juni 2024・Wintersemester</option>
        <option>Q324・Juli-September 2024・Sommersemester</option>
      </select>
      <CourseTable data={coursesBySemester} />
    </>
  );
}
