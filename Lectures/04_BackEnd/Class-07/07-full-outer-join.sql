SELECT
  s.name AS student_name,
  s.branch,
  i.company_name,
  i.status
FROM students AS s
FULL OUTER JOIN internships AS i ON s.student_id = i.student_id
