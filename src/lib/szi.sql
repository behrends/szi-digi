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
INSERT INTO periods VALUES (2,5,1,true,'2023-10-01','2023-12-24');
INSERT INTO periods VALUES (3,5,1,false,'2023-12-25','2024-04-14');
-- 2. Semester
INSERT INTO periods VALUES (4,5,2,true,'2024-04-15','2024-07-07');
INSERT INTO periods VALUES (5,5,2,false,'2024-07-08','2024-09-29');
-- 3. Semester
INSERT INTO periods VALUES (6,5,3,true,'2024-09-30','2024-12-22');
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
INSERT INTO periods VALUES (16,6,1,false,'2024-04-01','2024-04-14');
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

-- TIF22A: id=3
-- 2. Semester
INSERT INTO periods VALUES (27,3,2,true,'2023-04-03','2023-06-25');
INSERT INTO periods VALUES (28,3,2,false,'2023-06-26','2023-10-01');
-- 3. Semester
INSERT INTO periods VALUES (29,3,3,true,'2023-10-02','2023-12-24');
INSERT INTO periods VALUES (30,3,3,false,'2023-12-25','2024-03-31');
-- 4. Semester
INSERT INTO periods VALUES (31,3,4,true,'2024-04-01','2024-06-23');
INSERT INTO periods VALUES (32,3,4,false,'2024-06-24','2024-09-29');
-- 5. Semester
INSERT INTO periods VALUES (33,3,5,true,'2024-09-30','2024-12-22');
INSERT INTO periods VALUES (34,3,5,false,'2024-12-23','2025-01-05');
-- 6. Semester
INSERT INTO periods VALUES (35,3,6,true,'2025-01-06','2025-03-30');
INSERT INTO periods VALUES (36,3,6,false,'2025-03-31','2025-09-30');

-- TIF22B: id=4
-- 2. Semester
INSERT INTO periods VALUES (37,4,2,true,'2023-04-17','2023-07-09');
INSERT INTO periods VALUES (38,4,2,false,'2023-07-10','2023-10-01');
-- 3. Semester
INSERT INTO periods VALUES (39,4,3,true,'2023-10-02','2023-12-24');
INSERT INTO periods VALUES (40,4,3,false,'2023-12-25','2024-03-31');
-- 4. Semester
INSERT INTO periods VALUES (41,4,4,true,'2024-04-01','2024-06-23');
INSERT INTO periods VALUES (42,4,4,false,'2024-06-24','2024-09-29');
-- 5. Semester
INSERT INTO periods VALUES (43,4,5,true,'2024-09-30','2024-12-22');
INSERT INTO periods VALUES (44,4,5,false,'2024-12-23','2025-01-05');
-- 6. Semester
INSERT INTO periods VALUES (45,4,6,true,'2025-01-06','2025-03-30');
INSERT INTO periods VALUES (46,4,6,false,'2025-03-31','2025-09-30');

-- TIF21A: id=1
-- 4. Semester
INSERT INTO periods VALUES (47,1,4,true,'2023-04-03','2023-06-25');
INSERT INTO periods VALUES (48,1,4,false,'2023-06-26','2023-10-01');
-- 5. Semester
INSERT INTO periods VALUES (49,1,5,true,'2023-10-02','2023-12-24');
INSERT INTO periods VALUES (50,1,5,false,'2023-12-25','2024-01-07');
-- 6. Semester
INSERT INTO periods VALUES (51,1,6,true,'2024-01-08','2024-03-31');
INSERT INTO periods VALUES (52,1,6,false,'2024-04-01','2024-09-30');

-- TIF21B: id=2
-- 4. Semester
INSERT INTO periods VALUES (53,2,4,true,'2023-04-03','2023-06-25');
INSERT INTO periods VALUES (54,2,4,false,'2023-06-26','2023-10-01');
-- 5. Semester
INSERT INTO periods VALUES (55,2,5,true,'2023-10-02','2023-12-24');
INSERT INTO periods VALUES (56,2,5,false,'2023-12-25','2024-01-07');
-- 6. Semester
INSERT INTO periods VALUES (57,2,6,true,'2024-01-08','2024-03-31');
INSERT INTO periods VALUES (58,2,6,false,'2024-04-01','2024-09-30');


-- WWI20A: id=13
-- 6. Semester
INSERT INTO periods VALUES (59,13,6,true,'2023-04-10','2023-07-02');
INSERT INTO periods VALUES (60,13,6,false,'2023-07-03','2023-09-30');

-- WWI21A: id=7
-- 4. Semester
INSERT INTO periods VALUES (61,7,4,true,'2023-04-03','2023-06-25');
INSERT INTO periods VALUES (62,7,4,false,'2023-06-26','2023-10-01');
-- 5. Semester
INSERT INTO periods VALUES (63,7,5,true,'2023-10-02','2023-12-24');
INSERT INTO periods VALUES (64,7,5,false,'2023-12-25','2024-01-07');
-- 6. Semester
INSERT INTO periods VALUES (65,7,6,true,'2024-01-08','2024-03-31');
INSERT INTO periods VALUES (66,7,6,false,'2024-04-01','2024-09-22');
INSERT INTO periods VALUES (67,7,6,true,'2024-09-23','2024-09-27');

-- WWI22B --> mit WWI22A zusammengelegt
-- WWI22A: id=8
-- 2. Semester
INSERT INTO periods VALUES (68,8,2,true,'2023-04-03','2023-06-25');
INSERT INTO periods VALUES (69,8,2,false,'2023-06-26','2023-10-01');
-- 3. Semester
INSERT INTO periods VALUES (70,8,3,true,'2023-10-02','2023-12-24');
INSERT INTO periods VALUES (71,8,3,false,'2023-12-25','2024-03-31');
-- 4. Semester
INSERT INTO periods VALUES (72,8,4,true,'2024-04-01','2024-06-23');
INSERT INTO periods VALUES (73,8,4,false,'2024-06-24','2024-09-29');
-- 5. Semester
INSERT INTO periods VALUES (74,8,5,true,'2024-09-30','2024-12-22');
INSERT INTO periods VALUES (75,8,5,false,'2024-12-23','2025-01-05');
-- 6. Semester
INSERT INTO periods VALUES (76,8,6,true,'2025-01-06','2025-03-30');
INSERT INTO periods VALUES (77,8,6,false,'2025-03-31','2025-09-30');

-- WWI23A: id=10
-- 1. Semester
INSERT INTO periods VALUES (78,10,1,true,'2023-10-01','2023-12-24');
INSERT INTO periods VALUES (79,10,1,false,'2023-12-25','2024-04-14');
-- 2. Semester
INSERT INTO periods VALUES (80,10,2,true,'2024-04-15','2024-07-07');
INSERT INTO periods VALUES (81,10,2,false,'2024-07-08','2024-09-29');
-- 3. Semester
INSERT INTO periods VALUES (82,10,3,true,'2024-09-30','2024-12-22');
INSERT INTO periods VALUES (83,10,3,false,'2024-12-23','2025-03-30');
-- 4. Semester
INSERT INTO periods VALUES (84,10,4,true,'2025-03-31','2025-06-22');
INSERT INTO periods VALUES (85,10,4,false,'2025-06-23','2025-09-28');
-- 5. Semester
INSERT INTO periods VALUES (86,10,5,true,'2025-09-29','2025-12-21');
INSERT INTO periods VALUES (87,10,5,false,'2025-12-22','2026-01-11');
-- 6. Semester
INSERT INTO periods VALUES (88,10,6,true,'2026-01-12','2026-04-05');
INSERT INTO periods VALUES (89,10,6,false,'2026-04-06','2026-09-30');

-- WWI23B: id=11
INSERT INTO periods VALUES (90,11,1,false,'2023-10-01','2024-01-07');
INSERT INTO periods VALUES (91,11,1,true,'2024-01-08','2024-03-31');
INSERT INTO periods VALUES (92,11,1,false,'2024-04-01','2024-04-14');
-- 2. Semester
INSERT INTO periods VALUES (93,11,2,true,'2024-04-15','2024-07-07');
INSERT INTO periods VALUES (94,11,2,false,'2024-07-08','2024-09-29');
-- 3. Semester
INSERT INTO periods VALUES (95,11,4,true,'2024-09-30','2024-12-22');
INSERT INTO periods VALUES (96,11,3,false,'2024-12-23','2025-03-30');
-- 4. Semester
INSERT INTO periods VALUES (97,11,4,true,'2025-03-31','2025-06-22');
INSERT INTO periods VALUES (98,11,4,false,'2025-06-23','2025-09-28');
-- 5. Semester
INSERT INTO periods VALUES (99,11,5,true,'2025-09-29','2025-12-21');
INSERT INTO periods VALUES (100,11,5,false,'2025-12-22','2026-01-11');
-- 6. Semester
INSERT INTO periods VALUES (101,11,6,true,'2026-01-12','2026-04-05');
INSERT INTO periods VALUES (102,11,6,false,'2026-04-06','2026-09-30');

-- TEST
SELECT * FROM courses c, periods p WHERE c.id=p.course_id;
-- Next: convert query to JSON ? How to store extra dates in SQL?
-- Then: complete data and load complete data to cache