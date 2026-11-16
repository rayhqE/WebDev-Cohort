CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    branch VARCHAR(50)
);

CREATE TABLE internships(
  internship_id SERIAL PRIMARY KEY,
  company_name VARCHAR(100),
  role VARCHAR(50),
  stipend INT CHECK(stipend>1000),
  status VARCHAR(20),

  -- student_id INT REFERENCES  students(student_id) ON DELETE CASCADE 
  student_id INT REFERENCES  students(students_id) ON DELETE SET NULL --// SOFT DELETE
  -- student_id INT REFERENCES  students(students_id) ON DELETE CASCADE RESTRICT // WONT LET U DELETE 

)    
TRUNCATE TABLE internships, students RESTART IDENTITY;

INSERT INTO students (name, email, branch) VALUES 
('Rahul', 'rahul@gmail.com', 'Computer Science'),
('Sneha', 'sneha@yahoo.com', 'Information Tech'),
('Amit', 'amit@hotmail.com', 'Electronics'),
('Priya', 'priya@gmail.com', 'Mechanical'), -- Priya is focusing on higher studies, no internships.
('Rohan', 'rohan@outlook.com', 'Civil'); -- Rohan is working on a startup, no internships.


SELECT * FROM students

- Inserting Internships
INSERT INTO internships (student_id, company_name, role, stipend, status) VALUES 
(1, 'Google', 'Software Engineering Intern', 100000, 'Selected'), -- Rahul got selected!
(1, 'Microsoft', 'SDE Intern', 85000, 'Selected'), -- Rahul is killing it
(2, 'Amazon', 'Data Analyst Intern', 60000, 'Pending'), -- Sneha is waiting
(3, 'TCS', 'System Engineer Intern', 20000, 'Selected'), -- Amit got an offer
(5, 'OpenAI', 'AI Researcher', 150000, 'Selected'); -- Student ID 99 does not exist (Orphan Record) -> Would be BLOCKED by Foreign Key Constraint


SELECT * FROM internships



DELETE FROM students WHERE student_id = 5


SELECT
 students.name,
 students.branch,
 internships.company_name,
 internships.role,
 internships.stipend
FROM students
INNER JOIN internships ON students.student_id = internships.student_id

--with alias
SELECT
 s.name,
 s.branch,
 i.company_name,
 i.role,
 i.stipend
FROM students AS s
INNER JOIN internships AS i ON s.student_id = i.student_id

-- optional
SELECT
s.*,
i.company_name
FROM students AS s
INNER JOIN internships AS i ON s.student_id = i.student_id
 







DROP TABLE students;