CREATE DATABASE student_course_db;

USE student_course_db;

CREATE TABLE course (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    course_code VARCHAR(50) UNIQUE NOT NULL,
    course_duration INT NOT NULL
);

CREATE TABLE student (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    course_id INT,
    FOREIGN KEY (course_id)
    REFERENCES course(course_id)
);

INSERT INTO course
(course_name,course_code,course_duration)
VALUES
('Web Development','WD101',6),
('Machine Learning','ML201',8),
('Data Structures','DS301',4);