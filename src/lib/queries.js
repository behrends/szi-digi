import { sql } from "@vercel/postgres";

export const getCourses = async () => {
  const { rows } = await sql`SELECT * FROM courses ORDER BY name;`;
  return rows;
};

export const getCoursesAndPeriods = async () => {
  const { rows } =
    await sql`SELECT * FROM courses c, periods p WHERE c.id=p.course_id ORDER BY c.name ASC`;
  return rows;
};

export const getCoursesAndPeriodsByName = async (name) => {
  const { rows } =
    await sql`SELECT * FROM courses c, periods p WHERE c.id=p.course_id AND name=${name} ORDER BY p.start_date`;
  if (rows.length === 0) return undefined;
  return rows;
};

export const getExamDatesByName = async (name) => {
  const { rows } =
    await sql`SELECT * FROM exam_dates d, courses_exam_dates cd WHERE d.id=cd.exam_date_id AND cd.course_id=(SELECT id FROM courses WHERE name=${name}) ORDER BY d.exam_date ASC`;
  if (rows.length === 0) return undefined;
  return rows;
};

export const getMaxPeriodEnd = async () => {
  const { rows } = await sql`SELECT MAX(end_date) FROM periods;`;
  return rows[0].max;
};

export const getExamDates = async () => {
  const { rows } =
    await sql`SELECT * FROM exam_dates d, courses_exam_dates cd, courses c WHERE d.id=cd.exam_date_id AND cd.course_id=c.id AND d.exam_date BETWEEN CURRENT_DATE AND  (CURRENT_DATE + INTERVAL '3 months') ORDER BY d.exam_date ASC`;
  if (rows.length === 0) return undefined;
  return rows;
};
