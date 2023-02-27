const db = require("../models");
const { Op } = require("sequelize");

const {
    staff: Staff,
    course: Course,
    subject: Subject,
    students: Student,
    trainerReport: TrainerReport,
} = db;

const getFinalReport = async (req, res) => {
    try {
        const { subjectsId, studentId, staffsId } = req.body;
        const report = await getData(subjectsId, studentId, staffsId);
        if (!report) {
            res.status(404).send({ message: "final reports not found" });
        }
        res.status(200).send(report);
    } catch (error) {
        res.status(500).send(error);
    }
};

//TODO this function is responsible for sending the final report to the student
const sendFinalReport = async (req, res) => {
    try {
        const { subjectsId, studentId, staffsId } = req.body;
        const finalInfo = await getData(subjectsId, studentId, staffsId);
    } catch (error) {
        res.status(500).send(error);
    }
};

const reportGenerator = (finalInfo) => {
    //TODO this function is responsible for generating the final report
};

const getData = async (subjectsId, studentId, staffsId) => {
    try {
        const student = await Student.findByPk(studentId);
        const finalSubjects = await Staff.findAll({
            attributes: ["id", "name", "surname"],
            where: {
                id: staffsId,
            },
            include: [
                {
                    model: Subject,
                    where: {
                        id: subjectsId,
                        weightage: null,
                    },
                    include: [
                        {
                            model: TrainerReport,
                            where: {
                                studentId: studentId,
                            },
                        },
                    ],
                    required: false,
                },
            ],
            required: false,
        });
        const finalAssessments = await Staff.findAll({
            attributes: ["id", "name", "surname"],
            where: {
                id: staffsId,
            },
            include: [
                {
                    model: Subject,
                    where: {
                        id: subjectsId,
                        weightage: {
                            [Op.ne] : null,
                        },
                    },
                    include: [
                        {
                            model: TrainerReport,
                            where: {
                                studentId: studentId,
                            },
                        },
                    ],
                    required: false,
                },
            ],
            required: false,
        });
        return [student, finalSubjects, finalAssessments];
    } catch (error) {
        return error;
    }
};


module.exports = {
    getFinalReport,
    sendFinalReport,
};
