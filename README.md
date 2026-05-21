# Student Course Management System

## Overview
A backend-based Student Course Management System built using Node.js, Express.js, and MySQL.

The system performs complete CRUD operations and supports course association using SQL relationships.

## Tech Stack
- Node.js
- Express.js
- MySQL
- Thunder Client

## Features
✅ Add Student  
✅ View Students  
✅ Update Student  
✅ Delete Student  
✅ Course Association

## API Endpoints

GET /api/students

POST /api/students/add

PUT /api/students/update/:id

DELETE /api/students/delete/:id

## Database Design

Tables:
1. student
2. course

Relationship:
student.course_id → course.course_id

## Screenshots

See report PDF in repository.

## Author

Rishant Singh
MIT-WPU
