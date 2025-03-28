-- CREATE TABLE users (
--     full_name VARCHAR(300) NOT NULL,
--     yearly_salary INT CHECK (yearly_salary > 0 AND yearly_salary < 1000000),
-- );
-- 
-- UPDATE users
-- SET yearly_salary = NULL
-- WHERE yearly_salary = 0;
-- 
-- ALTER TABLE users
-- ADD CONSTRAINT yearly_salary_check CHECK (yearly_salary > 0);
-- 
INSERT INTO users (full_name, yearly_salary, current_status)
VALUES ('Moe Doe', 0, 'employed');