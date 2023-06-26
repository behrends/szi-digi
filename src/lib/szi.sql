CREATE TABLE courses (
    id bigint PRIMARY KEY,
    name character varying UNIQUE NOT NULL,
    exchange_name character varying
);

CREATE TABLE periods (
    id bigint PRIMARY KEY,
    course_id bigint NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    semester smallint NOT NULL,
    theory boolean NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    CONSTRAINT periods_semester_check CHECK (((semester >= 1) AND (semester <= 6))),
    CONSTRAINT start_end CHECK ((start_date < end_date))
);

INSERT INTO courses VALUES (1,'TIF21A',null);
INSERT INTO courses VALUES (2,'TIF21B',null);
INSERT INTO courses VALUES (3,'TIF22A',null);
INSERT INTO courses VALUES (4,'TIF22B',null);
INSERT INTO courses VALUES (5,'TIF23A',null);
INSERT INTO courses VALUES (6,'TIF23B',null);
INSERT INTO courses VALUES (7,'WWI21A',null);
INSERT INTO courses VALUES (8,'WWI22A','WWI22A-AM');
INSERT INTO courses VALUES (9,'WWI22B',null);
INSERT INTO courses VALUES (10,'WWI23A',null);
INSERT INTO courses VALUES (11,'WWI23B',null);
INSERT INTO courses VALUES (12,'TIF20A',null);
INSERT INTO courses VALUES (13,'WWI20A',null);

-- TIF20: id=12
INSERT INTO periods VALUES (1,12,6,false,'2023-04-03','2023-09-30');

-- TIF23A: id=5
-- 1. Semester
INSERT INTO periods VALUES (3,5,1,false,'2023-12-25','2024-04-14');
-- 2. Semester
INSERT INTO periods VALUES (4,5,2,true,'2024-04-15','2024-07-07');
INSERT INTO periods VALUES (5,5,2,false,'2024-07-08','2024-09-29');
-- 3. Semester
INSERT INTO periods VALUES (6,5,4,true,'2024-09-30','2024-12-22');
INSERT INTO periods VALUES (7,5,3,false,'2024-12-23','2025-03-30');
-- 4. Semester
INSERT INTO periods VALUES (8,5,4,true,'2025-03-31','2025-06-22');
INSERT INTO periods VALUES (9,5,4,false,'2025-06-23','2025-09-28');
-- 5. Semester
INSERT INTO periods VALUES (10,5,5,true,'2025-09-29','2025-12-21');
INSERT INTO periods VALUES (11,5,5,false,'2025-12-22','2026-01-11');
-- 6. Semester
INSERT INTO periods VALUES (12,5,6,true,'2026-01-12','2026-04-05');
INSERT INTO periods VALUES (13,5,6,false,'2026-04-06','2026-09-30');

-- TIF23B: id=6
-- 1. Semester
INSERT INTO periods VALUES (14,6,1,false,'2023-10-01','2024-01-07');
INSERT INTO periods VALUES (15,6,1,true,'2024-01-08','2024-03-31');
INSERT INTO periods VALUES (16,6,1,true,'2024-04-01','2024-04-14');
-- 2. Semester
INSERT INTO periods VALUES (17,6,2,true,'2024-04-15','2024-07-07');
INSERT INTO periods VALUES (18,6,2,false,'2024-07-08','2024-09-29');
-- 3. Semester
INSERT INTO periods VALUES (19,6,4,true,'2024-09-30','2024-12-22');
INSERT INTO periods VALUES (20,6,3,false,'2024-12-23','2025-03-30');
-- 4. Semester
INSERT INTO periods VALUES (21,6,4,true,'2025-03-31','2025-06-22');
INSERT INTO periods VALUES (22,6,4,false,'2025-06-23','2025-09-28');
-- 5. Semester
INSERT INTO periods VALUES (23,6,5,true,'2025-09-29','2025-12-21');
INSERT INTO periods VALUES (24,6,5,false,'2025-12-22','2026-01-11');
-- 6. Semester
INSERT INTO periods VALUES (25,6,6,true,'2026-01-12','2026-04-05');
INSERT INTO periods VALUES (26,6,6,false,'2026-04-06','2026-09-30');

-- TEST
SELECT * FROM courses c, periods p WHERE c.id=p.course_id;
-- Next: convert query to JSON ? How to store extra dates in SQL?
-- Then: complete data and load complete data to cache