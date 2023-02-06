const db = require("../models");
const Student = db.students;

const addOne = async (req, res) => {
    let info = {
        title: req.body.title,
        details: req.body.details,
        studentId: req.studentId,
    };
    // check if authorized
    const student = await Student.create(info);
    res.status(200).send("C R E A T E D");
};

const getAll = async (req, res) => {
    let studentId = req.studentId;

    let students = await Student.findAll({
        //conditions
        // check if authorized
    });
    res.status(200).send(students);
};

const getOne = async (req, res) => {
    let studentId = req.studentId;
    let id = req.params.id;
    let student = await Student.findOne({
        where: {
            studentId: studentId,
            //conditions
            // check if authorized
        },
        raw: true,
    });
    console.log(student, "Get one");
    res.status(200).send(student);
};

const updateOne = async (req, res) => {
    let studentId = req.studentId;
    let id = req.params.id;
    let student = await Student.update(
        {
            title: req.body.title,
            details: req.body.details,
            done: req.body.done,
        },
        {
            where: {
                studentId: studentId,
                //conditions
                // check if authorized
            },
            // raw: true,
        },
    );
    res.status(200).send("Updated");
    // res.json("okay");
};

const updateStatusById = async (req, res) => {
    console.log("sdfsdf");
    let studentId = req.studentId;
    let id = req.params.id;
    let student = await Student.update(
        {
            done: false,
        },
        {
            where: {
                studentId: studentId,
                //conditions
                // check if authorized
            },
            // raw: true,
        },
    );
    res.status(200).send("Updated");
    // res.json("okay");
};

const deleteOne = async (req, res) => {
    let studentId = req.studentId;
    let id = req.params.id;
    await Student.destroy({
        where: {
            studentId: studentId,
            //conditions
            // check if authorized
        },
    });
    console.log(" D E L E T E D ");
    res.status(200).send("Deleted");
};

module.exports = {
    addOne,
    getAll,
    getOne,
    updateOne,
    deleteOne,
    updateStatusById,
};
