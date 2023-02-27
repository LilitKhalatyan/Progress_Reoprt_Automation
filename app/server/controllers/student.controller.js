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
    res.status(201).send({ message: "Student created successfuly" });
  } catch (error) {
    res.status(500).send({ message: "Failed to create student" });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    return res.status(200).send(students);
  } catch (error) {
    res.status(500).send({ message: "Failed to get all students" });
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
    res.status(200).send([student]);
  } catch (error) {
    res.status(500).send({ message: "Failed to get student by Id" });
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
    res.status(500).send({ message: "Failed to get all students by Course" });
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
    const student = await Student.update(studentInfo, {
      where: {
        id: id,
      },
    });
    res.status(200).send({ message: "Student info updated successfully" });
  } catch (error) {
    res.status(500).send({ message: "Failed to update student info" });
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
    res.status(200).send({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Failed to delete student" });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getSudentById,
  getAllStudentsByCourse,
  updateSudent,
  deleteStudent,
};
