const express=require("express");
const router=express.Router();
const {
 getAllStudents,
 addStudent,
 updateStudent,
 deleteStudent,
 getStudentsByCourse
} = require("../controllers/studentController");


router.get("/",getAllStudents);

router.post("/add",addStudent);

router.put("/update/:id",updateStudent);

router.delete("/delete/:id",deleteStudent);
router.get("/course/:id", getStudentsByCourse);

module.exports=router;