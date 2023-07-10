CREATE TABLE courses (
    id bigint PRIMARY KEY,
    name varchar UNIQUE NOT NULL,
    exchange_name varchar
);

CREATE TABLE periods (
    id bigint PRIMARY KEY,
    course_id bigint NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    semester smallint NOT NULL,
    theory boolean NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    remarks varchar[],
    CONSTRAINT periods_semester_check CHECK (((semester >= 1) AND (semester <= 6))),
    CONSTRAINT start_end CHECK ((start_date < end_date))
);

CREATE TABLE exam_dates(
    id bigint PRIMARY KEY,
    exam_date date NOT NULL,
    fixed boolean NOT NULL DEFAULT true,
    duration smallint NOT NULL DEFAULT 1,
    description varchar
);

CREATE TABLE courses_exam_dates (
    course_id bigint NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    exam_date_id bigint NOT NULL REFERENCES exam_dates(id) ON DELETE CASCADE,
    PRIMARY KEY (course_id, exam_date_id)
);

INSERT INTO courses VALUES (1,'TIF21A',null);
INSERT INTO courses VALUES (2,'TIF21B',null);
INSERT INTO courses VALUES (3,'TIF22A',null);
INSERT INTO courses VALUES (4,'TIF22B',null);
INSERT INTO courses VALUES (5,'TIF23A',null);
INSERT INTO courses VALUES (6,'TIF23B',null);
INSERT INTO courses VALUES (7,'WWI21A',null);
INSERT INTO courses VALUES (8,'WWI22A','WWI22A-AM');
-- INSERT INTO courses VALUES (9,'WWI22B',null); zusammengelegt mit WWI22A
INSERT INTO courses VALUES (10,'WWI23A',null);
INSERT INTO courses VALUES (11,'WWI23B',null);

-- TIF23A: id=5
-- PERIODS
-- 1. Semester
INSERT INTO periods VALUES (2,5,1,true,'2023-10-01','2023-12-24', null);
INSERT INTO periods VALUES (3,5,1,false,'2023-12-25','2024-04-14', null);
-- 2. Semester
INSERT INTO periods VALUES (4,5,2,true,'2024-04-15','2024-07-07', null);
INSERT INTO periods VALUES (5,5,2,false,'2024-07-08','2024-09-29', '{"1. Projektarbeit"}';
-- 3. Semester
INSERT INTO periods VALUES (6,5,3,true,'2024-09-30','2024-12-22', null);
INSERT INTO periods VALUES (7,5,3,false,'2024-12-23','2025-03-30', null);
-- 4. Semester
INSERT INTO periods VALUES (8,5,4,true,'2025-03-31','2025-06-22', null);
INSERT INTO periods VALUES (9,5,4,false,'2025-06-23','2025-09-28', '{"2. Projektarbeit"}');
-- 5. Semester
INSERT INTO periods VALUES (10,5,5,true,'2025-09-29','2025-12-21', '{"Studienarbeit"}');
INSERT INTO periods VALUES (11,5,5,false,'2025-12-22','2026-01-11', null);
-- 6. Semester
INSERT INTO periods VALUES (12,5,6,true,'2026-01-12','2026-04-05', null);
INSERT INTO periods VALUES (13,5,6,false,'2026-04-06','2026-09-30', '{"3. Projektarbeit", "Bachelorarbeit"}');

-- EXAM DATES für TIF23A und TIF23B (weiter unten)
INSERT INTO exam_dates (id, exam_date, description) VALUES (1, '2024-07-15', 'Anmeldung 1. Projektarbeit');
INSERT INTO exam_dates (id, exam_date, description) VALUES (2, '2024-07-15', 'Mitteilung des gewünschten Schwerpunktes');
INSERT INTO exam_dates (id, exam_date, description) VALUES (3, '2025-09-30', 'Abgabe 1. Projektarbeit\n Abgabe Reflexionsbericht, Ablaufplan');
INSERT INTO exam_dates (id, exam_date, fixed, description) VALUES (4, '2025-07-01', false, 'Vorbereitung/Briefing 2. Projektarbeit');
INSERT INTO exam_dates (id, exam_date, description) VALUES (5, '2025-07-07', 'Anmeldung 2. Projektarbeit');
INSERT INTO exam_dates (id, exam_date, description) VALUES (6, '2025-09-29', 'Abgabe 2. Projektarbeit\n Abgabe Reflexionsbericht, Ablaufplan');
INSERT INTO exam_dates (id, exam_date, fixed, description) VALUES (7, '2026-11-01', false, 'Präsentation 2. Projektarbeit');
INSERT INTO exam_dates (id, exam_date, description) VALUES (8, '2026-04-03', 'Abgabe der Studienarbeit/Projekt');
INSERT INTO exam_dates (id, exam_date, description) VALUES (9, '2026-05-04', 'Anmeldung 3. Projektarbeit');
INSERT INTO exam_dates (id, exam_date, description) VALUES (10, '2026-06-29', 'Abgabe 3. Projektarbeit');
INSERT INTO exam_dates (id, exam_date, fixed, description) VALUES (11, '2026-03-01', false, 'Vorbereitung/Briefing Bachelorarbeit');
INSERT INTO exam_dates (id, exam_date, description) VALUES (12, '2026-06-15', 'Anmeldung Bachelorarbeit');
INSERT INTO exam_dates (id, exam_date, description) VALUES (13, '2026-09-07', 'Abgabe Bachelorarbeit\n Abgabe Reflexionsbericht, Ablaufplan');

INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (5, 1);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (5, 2);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (5, 3);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (5, 4);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (5, 5);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (5, 6);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (5, 7);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (5, 8);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (5, 9);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (5, 10);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (5, 11);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (5, 12);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (5, 13);

-- TIF23B: id=6
-- 1. Semester
INSERT INTO periods VALUES (14,6,1,false,'2023-10-01','2024-01-07', null);
INSERT INTO periods VALUES (15,6,1,true,'2024-01-08','2024-03-31', null);
INSERT INTO periods VALUES (16,6,1,false,'2024-04-01','2024-04-14', null);
-- 2. Semester
INSERT INTO periods VALUES (17,6,2,true,'2024-04-15','2024-07-07', null);
INSERT INTO periods VALUES (18,6,2,false,'2024-07-08','2024-09-29', '{"1. Projektarbeit"}');
-- 3. Semester
INSERT INTO periods VALUES (19,6,4,true,'2024-09-30','2024-12-22', null);
INSERT INTO periods VALUES (20,6,3,false,'2024-12-23','2025-03-30', null);
-- 4. Semester
INSERT INTO periods VALUES (21,6,4,true,'2025-03-31','2025-06-22', null);
INSERT INTO periods VALUES (22,6,4,false,'2025-06-23','2025-09-28', '{"2. Projektarbeit"}');
-- 5. Semester
INSERT INTO periods VALUES (23,6,5,true,'2025-09-29','2025-12-21', '{"Studienarbeit"}');
INSERT INTO periods VALUES (24,6,5,false,'2025-12-22','2026-01-11', null);
-- 6. Semester
INSERT INTO periods VALUES (25,6,6,true,'2026-01-12','2026-04-05', null);
INSERT INTO periods VALUES (26,6,6,false,'2026-04-06','2026-09-30', '{"3. Projektarbeit", "Bachelorarbeit"}');

-- Exam Dates (entsprechen TIF23A, siehe oben)
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (6, 1);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (6, 2);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (6, 3);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (6, 4);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (6, 5);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (6, 6);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (6, 7);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (6, 8);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (6, 9);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (6, 10);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (6, 11);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (6, 12);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (6, 13);

-- TIF22A: id=3
-- 2. Semester
INSERT INTO periods VALUES (27,3,2,true,'2023-04-03','2023-06-25', null);
INSERT INTO periods VALUES (28,3,2,false,'2023-06-26','2023-10-01', '{"1. Projektarbeit"}');
-- 3. Semester
INSERT INTO periods VALUES (29,3,3,true,'2023-10-02','2023-12-24', null);
INSERT INTO periods VALUES (30,3,3,false,'2023-12-25','2024-03-31', null);
-- 4. Semester
INSERT INTO periods VALUES (31,3,4,true,'2024-04-01','2024-06-23', null);
INSERT INTO periods VALUES (32,3,4,false,'2024-06-24','2024-09-29', '{"2. Projektarbeit"}');
-- 5. Semester
INSERT INTO periods VALUES (33,3,5,true,'2024-09-30','2024-12-22', '{"Studienarbeit"}');
INSERT INTO periods VALUES (34,3,5,false,'2024-12-23','2025-01-05', null);
-- 6. Semester
INSERT INTO periods VALUES (35,3,6,true,'2025-01-06','2025-03-30', null);
INSERT INTO periods VALUES (36,3,6,false,'2025-03-31','2025-09-30', '{"3. Projektarbeit", "Bachelorarbeit"}');

-- Exam Dates für (TIF22A und TIF22B, siehe unten)
INSERT INTO exam_dates (id, exam_date, description) VALUES (14, '2024-09-30', 'Abgabe 2. Projektarbeit\n Abgabe Reflexionsbericht, Ablaufplan');
INSERT INTO exam_dates (id, exam_date, fixed, description) VALUES (15, '2024-11-01', false, 'Präsentation 2. Projektarbeit');
INSERT INTO exam_dates (id, exam_date, description) VALUES (16, '2025-03-30', 'Abgabe der Studienarbeit/Projekt');
INSERT INTO exam_dates (id, exam_date, description) VALUES (17, '2025-04-28', 'Anmeldung 3. Projektarbeit');
INSERT INTO exam_dates (id, exam_date, description) VALUES (18, '2025-06-23', 'Abgabe 3. Projektarbeit');
INSERT INTO exam_dates (id, exam_date, fixed, description) VALUES (19, '2025-03-01', false, 'Vorbereitung/Briefing Bachelorarbeit');
INSERT INTO exam_dates (id, exam_date, description) VALUES (20, '2025-06-09', 'Anmeldung Bachelorarbeit');
INSERT INTO exam_dates (id, exam_date, description) VALUES (21, '2025-09-01', 'Abgabe Bachelorarbeit\n Abgabe Reflexionsbericht, Ablaufplan');

INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (3, 14);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (3, 15);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (3, 16);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (3, 17);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (3, 18);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (3, 19);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (3, 20);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (3, 21);

-- TIF22B: id=4
-- 2. Semester
INSERT INTO periods VALUES (37,4,2,true,'2023-04-17','2023-07-09', null);
INSERT INTO periods VALUES (38,4,2,false,'2023-07-10','2023-10-01', '{"1. Projektarbeit"}');
-- 3. Semester
INSERT INTO periods VALUES (39,4,3,true,'2023-10-02','2023-12-24', null);
INSERT INTO periods VALUES (40,4,3,false,'2023-12-25','2024-03-31', null);
-- 4. Semester
INSERT INTO periods VALUES (41,4,4,true,'2024-04-01','2024-06-23', null);
INSERT INTO periods VALUES (42,4,4,false,'2024-06-24','2024-09-29', '{"2. Projektarbeit"}');
-- 5. Semester
INSERT INTO periods VALUES (43,4,5,true,'2024-09-30','2024-12-22', '{"Studienarbeit"}');
INSERT INTO periods VALUES (44,4,5,false,'2024-12-23','2025-01-05', null);
-- 6. Semester
INSERT INTO periods VALUES (45,4,6,true,'2025-01-06','2025-03-30', null);
INSERT INTO periods VALUES (46,4,6,false,'2025-03-31','2025-09-30', '{"3. Projektarbeit", "Bachelorarbeit"}');

-- Exam Dates (s.o. wie bei TIF22A)
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (4, 14);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (4, 15);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (4, 16);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (4, 17);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (4, 18);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (4, 19);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (4, 20);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (4, 21);

-- TIF21A: id=1
-- 4. Semester
INSERT INTO periods VALUES (47,1,4,true,'2023-04-03','2023-06-25', null);
INSERT INTO periods VALUES (48,1,4,false,'2023-06-26','2023-10-01', '{"2. Projektarbeit"}');
-- 5. Semester
INSERT INTO periods VALUES (49,1,5,true,'2023-10-02','2023-12-24', null);
INSERT INTO periods VALUES (50,1,5,false,'2023-12-25','2024-01-07', null);
-- 6. Semester
INSERT INTO periods VALUES (51,1,6,true,'2024-01-08','2024-03-31', null);
INSERT INTO periods VALUES (52,1,6,false,'2024-04-01','2024-09-30', '{"3. Projektarbeit", "Bachelorarbeit"}');

-- Exam Dates
INSERT INTO exam_dates (id, exam_date, description) VALUES (22, '2023-10-02', 'Abgabe 2. Projektarbeit (12 Uhr)\n Abgabe Reflexionsbericht, Ablaufplan');
INSERT INTO exam_dates (id, exam_date, fixed, description) VALUES (23, '2023-11-01', false, 'Präsentation 2. Projektarbeit');
INSERT INTO exam_dates (id, exam_date, description) VALUES (24, '2024-03-29', 'Abgabe der Studienarbeit/Projekt');
INSERT INTO exam_dates (id, exam_date, description) VALUES (25, '2024-04-29', 'Anmeldung 3. Projektarbeit');
INSERT INTO exam_dates (id, exam_date, description) VALUES (26, '2024-06-24', 'Abgabe 3. Projektarbeit');
INSERT INTO exam_dates (id, exam_date, description) VALUES (27, '2024-06-10', 'Anmeldung Bachelorarbeit (12 Uhr)');
INSERT INTO exam_dates (id, exam_date, description) VALUES (28, '2024-09-02', 'Abgabe Bachelorarbeit (12 Uhr)\n Abgabe Reflexionsbericht, Ablaufplan');

INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (1, 22);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (1, 23);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (1, 24);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (1, 25);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (1, 26);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (1, 27);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (1, 28);


-- TIF21B: id=2
-- 4. Semester
INSERT INTO periods VALUES (53,2,4,true,'2023-04-03','2023-06-25', null);
INSERT INTO periods VALUES (54,2,4,false,'2023-06-26','2023-10-01', '{"2. Projektarbeit"}');
-- 5. Semester
INSERT INTO periods VALUES (55,2,5,true,'2023-10-02','2023-12-24', null);
INSERT INTO periods VALUES (56,2,5,false,'2023-12-25','2024-01-07', null);
-- 6. Semester
INSERT INTO periods VALUES (57,2,6,true,'2024-01-08','2024-03-31', null);
INSERT INTO periods VALUES (58,2,6,false,'2024-04-01','2024-09-30', '{"3. Projektarbeit", "Bachelorarbeit"}');

-- Exam dates (wie bei TIF21A s.o.)
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (2, 22);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (2, 23);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (2, 24);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (2, 25);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (2, 26);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (2, 27);
INSERT INTO courses_exam_dates (course_id, exam_date_id) VALUES (2, 28);


-- WWI21A: id=7
-- 4. Semester
INSERT INTO periods VALUES (61,7,4,true,'2023-04-03','2023-06-25', null);
INSERT INTO periods VALUES (62,7,4,false,'2023-06-26','2023-10-01', '{"2. Projektarbeit"}');
-- 5. Semester
INSERT INTO periods VALUES (63,7,5,true,'2023-10-02','2023-12-24', null);
INSERT INTO periods VALUES (64,7,5,false,'2023-12-25','2024-01-07', null);
-- 6. Semester
INSERT INTO periods VALUES (65,7,6,true,'2024-01-08','2024-03-31', '{"Seminararbeit"}');
INSERT INTO periods VALUES (66,7,6,false,'2024-04-01','2024-09-22', '{"Bachelorarbeit"}');
INSERT INTO periods VALUES (67,7,6,true,'2024-09-23','2024-09-27', '{"Bachelorprüfung"}');

-- WWI22B --> mit WWI22A zusammengelegt
-- WWI22A: id=8
-- 2. Semester
INSERT INTO periods VALUES (68,8,2,true,'2023-04-03','2023-06-25', null);
INSERT INTO periods VALUES (69,8,2,false,'2023-06-26','2023-10-01', '{"1. Projektarbeit"}');
-- 3. Semester
INSERT INTO periods VALUES (70,8,3,true,'2023-10-02','2023-12-24', null);
INSERT INTO periods VALUES (71,8,3,false,'2023-12-25','2024-03-31', null);
-- 4. Semester
INSERT INTO periods VALUES (72,8,4,true,'2024-04-01','2024-06-23', null);
INSERT INTO periods VALUES (73,8,4,false,'2024-06-24','2024-09-29', '{"2. Projektarbeit"}');
-- 5. Semester
INSERT INTO periods VALUES (74,8,5,true,'2024-09-30','2024-12-22', '{"Seminararbeit"}');
INSERT INTO periods VALUES (75,8,5,false,'2024-12-23','2025-01-05', null);
-- 6. Semester
INSERT INTO periods VALUES (76,8,6,true,'2025-01-06','2025-03-30', null);
INSERT INTO periods VALUES (77,8,6,false,'2025-03-31','2025-09-30', '{"Bachelorarbeit"}');

-- WWI23A: id=10
-- 1. Semester
INSERT INTO periods VALUES (78,10,1,true,'2023-10-01','2023-12-24', null);
INSERT INTO periods VALUES (79,10,1,false,'2023-12-25','2024-04-14', null);
-- 2. Semester
INSERT INTO periods VALUES (80,10,2,true,'2024-04-15','2024-07-07', null);
INSERT INTO periods VALUES (81,10,2,false,'2024-07-08','2024-09-29', '{"1. Projektarbeit"}');
-- 3. Semester
INSERT INTO periods VALUES (82,10,3,true,'2024-09-30','2024-12-22', null);
INSERT INTO periods VALUES (83,10,3,false,'2024-12-23','2025-03-30', null);
-- 4. Semester
INSERT INTO periods VALUES (84,10,4,true,'2025-03-31','2025-06-22', null);
INSERT INTO periods VALUES (85,10,4,false,'2025-06-23','2025-09-28', '{"2. Projektarbeit"}');
-- 5. Semester
INSERT INTO periods VALUES (86,10,5,true,'2025-09-29','2025-12-21', '{"Seminararbeit"}');
INSERT INTO periods VALUES (87,10,5,false,'2025-12-22','2026-01-11', null);
-- 6. Semester
INSERT INTO periods VALUES (88,10,6,true,'2026-01-12','2026-04-05', null);
INSERT INTO periods VALUES (89,10,6,false,'2026-04-06','2026-09-30', '{"Bachelorarbeit"}');

-- WWI23B: id=11
INSERT INTO periods VALUES (90,11,1,false,'2023-10-01','2024-01-07', null);
INSERT INTO periods VALUES (91,11,1,true,'2024-01-08','2024-03-31', null);
INSERT INTO periods VALUES (92,11,1,false,'2024-04-01','2024-04-14', null);
-- 2. Semester
INSERT INTO periods VALUES (93,11,2,true,'2024-04-15','2024-07-07', null);
INSERT INTO periods VALUES (94,11,2,false,'2024-07-08','2024-09-29', '{"1. Projektarbeit"}');
-- 3. Semester
INSERT INTO periods VALUES (95,11,3,true,'2024-09-30','2024-12-22', null);
INSERT INTO periods VALUES (96,11,3,false,'2024-12-23','2025-03-30', null);
-- 4. Semester
INSERT INTO periods VALUES (97,11,4,true,'2025-03-31','2025-06-22', null);
INSERT INTO periods VALUES (98,11,4,false,'2025-06-23','2025-09-28', '{"2. Projektarbeit"}');
-- 5. Semester
INSERT INTO periods VALUES (99,11,5,true,'2025-09-29','2025-12-21', '{"Seminararbeit"}');
INSERT INTO periods VALUES (100,11,5,false,'2025-12-22','2026-01-11', null);
-- 6. Semester
INSERT INTO periods VALUES (101,11,6,true,'2026-01-12','2026-04-05', null);
INSERT INTO periods VALUES (102,11,6,false,'2026-04-06','2026-09-30', '{"Bachelorarbeit"}');

-- TEST
-- SELECT * FROM courses c, periods p WHERE c.id=p.course_id;

