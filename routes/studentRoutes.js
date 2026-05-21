const express=require("express");
const router=express.Router();

const {
    getAllStudents,
    addStudent,
    updateStudent,
    deleteStudent
}=require("../controllers/studentController");

router.get("/",getAllStudents);

router.post("/add",addStudent);

router.put("/update/:id",updateStudent);

router.delete("/delete/:id",deleteStudent);

module.exports=router;