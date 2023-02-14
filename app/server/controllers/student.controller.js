const db = require("../models");
const Student = db.students;

const createStudent = async (req, res) => {
    try {
        const { name, surname, email, courseId } = req.body;
        const studentInfo = {
            name,
            surname,
            email,
            courseId,
        };
        const student = await Student.create(studentInfo);
        return res.status(200).send("Student created successfully");
    } catch (error) {
        res.status(500);
    }
};

const getAllStudentsByCourse = async (req, res) => {
    try {
        if (req.params.id) {
            const id = req.params.id;
            const students = await Student.findAll({
                where: {
                    courseId: id,
                },
            });
            return res.status(200).send(students);
        }
        const students = await Student.findAll();
        return res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getSudentById = async (req, res) => {
    try {
        const id = req.params.id;
        const student = await Student.findOne({
            where: {
                id: id,
            },
        });
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateSudent = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, surname, email, courseId } = req.body;
        const studentInfo = {
            name,
            surname,
            email,
            courseId,
        };
        const student = await Student.update({
            where: {
                id: id,
            },
        });
        res.status(200).send("Student Updated successfully");
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        await Student.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).send("Student Deleted successfully");
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    updateSudent,
    createStudent,
    getSudentById,
    deleteStudent,
    getAllStudentsByCourse,
};
