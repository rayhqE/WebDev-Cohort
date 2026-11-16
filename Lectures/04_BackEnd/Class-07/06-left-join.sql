SELECT
s.name,
s.branch,
i.company_name,
i.stipend
FROM students AS s
LEFT JOIN internships AS i ON i.student_id = s.student_id 



SELECT
s.name,
s.branch,
i.company_name,
i.stipend 
FROM  internships AS i
LEFT JOIN  students AS s ON i.student_id = s.student_id 