const db = require("../config/db");

const getAllStudents = (req, res) => {

    const query = `
    SELECT student.*, course.course_name
    FROM student
    LEFT JOIN course
    ON student.course_id = course.course_id
    `;

    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

const addStudent = (req, res) => {

    const { student_name, email, course_id } = req.body;

    const query = `
    INSERT INTO student
    (student_name,email,course_id)
    VALUES (?,?,?)
    `;

    db.query(
        query,
        [student_name,email,course_id],
        (err,result)=>{

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message:"Student Added Successfully"
            });

        }
    );
};
const updateStudent = (req,res)=>{

    const id = req.params.id;

    const {student_name,email,course_id} = req.body;

    const query=`
    UPDATE student
    SET student_name=?,email=?,course_id=?
    WHERE student_id=?
    `;

    db.query(
        query,
        [student_name,email,course_id,id],
        (err,result)=>{

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message:"Student Updated"
            });

        }
    );
};

const deleteStudent=(req,res)=>{

    const id=req.params.id;

    const query=
    "DELETE FROM student WHERE student_id=?";

    db.query(query,[id],(err,result)=>{

        if(err){
            return res.status(500).json(err);
        }

        res.json({
            message:"Student Deleted"
        });

    });

};
const getStudentsByCourse = (req,res)=>{

    const { id } = req.params;

    const query = `
    SELECT *
    FROM student
    WHERE course_id=?`;

    db.query(query,[id],(err,result)=>{

        if(err){
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

module.exports = {
    getAllStudents,
    addStudent,
    updateStudent,
    deleteStudent,
    getStudentsByCourse
};