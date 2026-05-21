# Student Course Management System

## About Project

This project is a Student Course Management System developed using Node.js, Express.js and MySQL.

The main goal of the project is to manage student details and course information using CRUD operations. Students can be added, viewed, updated and deleted through REST APIs.

This project was created as part of a technical assessment and helped me understand backend development, API creation and database integration.

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- Thunder Client

---

## Features

- Add Student
- View Student Details
- Update Student Information
- Delete Student
- Course Association using Foreign Key

---

## API Endpoints

GET  
`/api/students`

POST  
`/api/students/add`

PUT  
`/api/students/update/:id`

DELETE  
`/api/students/delete/:id`

---

## Database Tables

### Course Table
- course_id
- course_name
- course_code
- course_duration

### Student Table
- student_id
- student_name
- email
- course_id

---

## Screenshots

Screenshots and API outputs are included in the project report PDF uploaded in this repository.

---

## Learning Outcome

While building this project I learned:

- Creating REST APIs using Express
- Connecting Node.js with MySQL
- Handling CRUD operations
- API testing using Thunder Client
- GitHub project management

---

Rishant Singh  
MIT-WPU
