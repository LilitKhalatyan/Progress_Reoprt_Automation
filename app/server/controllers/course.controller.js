const db = require("../models");

const { staff: Staff, course: Course } = db;

const createCourse = async (req, res) => {
    try {
        if (
            req.body.constructor === Object &&
            Object.keys(req.body).length === 0
        ) {
            res.status(400).send({
                error: true,
                message: "Please provide all required field",
            });
            return;
        }
        const { name, startDate, endDate } = req.body;

        const courseInfo = {
            name,
            startDate,
            endDate,
        };

        await Course.create(courseInfo);

        res.status(201).send({ message: "Course created successfuly" });
    } catch (error) {
        res.status(500).send("Course created failed");
    }
};

const updateCourse = async (req, res) => {
    try {
        if (
            req.body.constructor === Object &&
            Object.keys(req.body).length === 0
        ) {
            res.status(400).send({
                error: true,
                message: "Please provide all required field",
            });
            return;
        }
        const { id, name, startDate, endDate } = req.body;

        const course = Course.findByPk(id);
        if (!course) {
            return res.status(400).send({ message: "course not found" });
        }
        const updateCourseInfo = {
            name,
            startDate,
            endDate,
        };
        await Course.update(updateCourseInfo, {
            where: {
                id: id,
            },
        });
        res.status(200).send({ message: "Course updated successfully" });
    } catch (error) {
        res.status(500).send({ message: "Course updated failed" });
    }
};

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        if (!courses) {
            return res.status(404).send({ message: "Courses not found" });
        }
        res.status(200).send(courses);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getCourseByTrainerId = async (req, res) => {
    try {
        const trainerId = req.params.id;
        const courses = await Course.findAll({
            include: [
                {
                    model: Staff,
                    where: {
                        id: trainerId,
                    },
                    required: true,
                },
            ],
        });

        const finallData = [];
        courses.forEach((element) => {
            const { id, name, startDate, endDate } = element;
            finallData.push({ id, name, startDate, endDate });
        });
        res.status(200).send(finallData);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getCourseById = async (req, res) => {
    try {
        const id = req.params.id;
        const course = await Course.findByPk(id);

        res.status(200).send([course]);
    } catch (error) {
        res.status(500).send(error);
    }
};
const deleteCourse = async (req, res) => {
    try {
        const id = req.params.id;
        await Course.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).send({ message: "course deleted succesfully" });
    } catch (error) {
        res.status(500).send({ message: "course deleted failed" });
    }
};
module.exports = {
    createCourse,
    updateCourse,
    deleteCourse,
    getAllCourses,
    getCourseById,
};
