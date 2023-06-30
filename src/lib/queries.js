import { cache } from 'react';
import { sql } from '@vercel/postgres';
import 'server-only';

export const preload = () => {
  void getCourses();
  void getCoursesAndPeriods();
};

export const getCourses = cache(async () => {
  const { rows } = await sql`SELECT * FROM courses ORDER BY name;`;
  return rows;
});

export const getCoursesAndPeriods = cache(async () => {
  const { rows } =
    await sql`SELECT * FROM courses c, periods p WHERE c.id=p.course_id ORDER BY c.name ASC`;
  return rows;
});

export const getCoursesAndPeriodsByName = cache(async (name) => {
  const { rows } =
    await sql`SELECT * FROM courses c, periods p WHERE c.id=p.course_id AND name=${name} ORDER BY p.start_date`;
  if (rows.length === 0) return undefined;
  return rows;
});
