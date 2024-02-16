-- insert employee
INSERT INTO 
employees 
(`nik`, `name`, `is_active`, `start_date`, `end_date`, `created_by`, `updated_by`, `createdAt`, `updatedAt`) 
VALUES ('11012', 'Budi', 1, '2022-12-12', '2029-12-12', 'admin', 'admin', NOW(), NOW());
INSERT INTO 
employees 
(`nik`, `name`, `is_active`, `start_date`, `end_date`, `created_by`, `updated_by`, `createdAt`, `updatedAt`) 
VALUES ('11013', 'Jarot', 1, '2021-09-01', '2028-09-01', 'admin', 'admin', NOW(), NOW());


-- insert employee education
INSERT INTO 
educations 
VALUES 
(NULL, 1, 'SMKN 7 Jakarta', 'SMA', 'Sekolah Menengah Atas', 'admin', 'admin', NOW(), NOW()),
(NULL, 2, 'Universitas Negeri Jakarta', 'Strata 1', 'Sarjana', 'admin', 'admin', NOW(), NOW())

-- insert employee family
INSERT INTO
employeefamilys
VALUES
(NULL, 1, 'Marni', '32100594109960002', 'Ibu Rumah Tangga', 'Denpasar', '1995-10-17', 'Islam', 1, 0, 'Istri', 'admin', 'admin', NOW(), NOW()),
(NULL, 1, 'Clara', '32100594109020004', 'Pelajar', 'Bangkalan', '2008-10-17', 'Islam', 1, 0, 'Anak', 'admin', 'admin', NOW(), NOW()),
(NULL, 1, 'Stephanie', '32100594109020005', 'Pelajar', 'Bangkalan', '2008-10-17', 'Islam', 1, 0, 'Anak', 'admin', 'admin', NOW(), NOW());

-- insert employee profile
INSERT INTO 
employeeprofiles
VALUES
(NULL, 1, 'Jakarta', '1997-05-02', 'Laki-Laki', 1, '', 'admin', 'admin', NOW(), NOW()),
(NULL, 2, 'Sukabumi', '1996-05-02', 'Laki-Laki', 0, '', 'admin', 'admin', NOW(), NOW());
