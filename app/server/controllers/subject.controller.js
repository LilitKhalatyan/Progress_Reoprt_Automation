const db = require("../models");

const { staff: Staff, course: Course, subject: Subject } = db;

const createSubject = async (req, res) => {
    try {
        const { name, staffId, courseId, max_score, weightage = null} = req.body;
        const subjectInfo = {
            name,
            staffId,
            courseId,
            max_score,
            weightage,
        };
        const subject = Subject.create(subjectInfo);
        res.status(200).send({ message: "subject create succesfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateSubject = async (req, res) => {
    try {
        const { name, staffId, courseId, id, max_score, weightage = null } = req.body;
        const subjectInfo = {
            name,
            staffId,
            courseId,
            max_score,
            weightage,
        };
        await Subject.update(subjectInfo, {
            where: {
                id: id,
            },
        });

        res.status(200).send({ message: "Subject updated successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};

const getAllSubject = async (req, res) => {
    try {
        const subjects = await Subject.findAll();
        if (!subjects) {
            res.status(404).send({ message: "subjects not found" });
        }
        res.status(200).send(subjects);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getSubjectById = async (req, res) => {
    try {
        const id = req.params.id
        const subjects = await Subject.findByPk(id);
        if (!subjects) {
            res.status(404).send({ message: "subject not found" });
        }
        res.status(200).send([subjects]);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getSubjectbyTrainer = async (req, res) => {
    try {
        const staffId = req.userId;
        const courseId = req.params.id;

        const subjects = await Subject.findAll({
            where: {
                courseId: courseId,
                staffId: staffId,
            },
        });
        if (!subjects) {
            res.status(404).send({ message: "subjects not found" });
        }

        res.status(200).send(subjects);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteSubject = async (req, res) => {
    try {
        const id = req.params.id;

        await Subject.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).send({ message: "subject deleted succesfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    updateSubject,
    createSubject,
    getAllSubject,
    deleteSubject,
    getSubjectById,
    getSubjectbyTrainer,
};
