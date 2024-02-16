SELECT e.id AS employee_id, e.nik, e.name, IF(e.is_active = 1, 'TRUE', 'FALSE') AS is_active, ep.gender, CONCAT(DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(), ep.date_of_birth)), '%Y')+0,' ', 'Years Old') AS age, ed.name AS school_name, ed.level, IFNULL(family_data.family_data, '-') AS family_data FROM employees e JOIN employeeprofiles ep ON ep.employee_id = e.id JOIN educations ed ON ed.employee_id = e.id LEFT JOIN (SELECT e2.id, CONCAT(SUM(IF(ef.relation_status = 'Istri', 1, NULL)), ' ', 'Istri ', SUM(IF(ef.relation_status = 'Anak', 1, NULL)), ' ', 'Anak') AS family_data FROM employees e2 RIGHT JOIN employeefamilys ef ON ef.employee_id = e2.id GROUP BY e2.id) AS family_data ON family_data.id = e.id;