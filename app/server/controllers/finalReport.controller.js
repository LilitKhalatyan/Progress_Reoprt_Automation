const db = require("../models");

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

//TODO
const sendFinalReport = async (req, res) => {
    try {
        const { subjectsId, studentId, staffsId } = req.body;
        const finalInfo = await getData(subjectsId, studentId, staffsId);
    } catch (error) {
        res.status(500).send(error);
    }
};

const reportGenerator = (finalInfo) => {
    //TODO
};

const getData = async (subjectsId, studentId, staffsId) => {
    try {
        const student = await Student.findByPk(studentId);
        const finalInfo = await Staff.findAll({
            attributes: ["id", "name", "surname"],
            where: {
                id: staffsId,
            },
            include: [
                {
                    model: Subject,
                    where: {
                        id: subjectsId,
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
        return [student, finalInfo];
    } catch (error) {
        return error;
    }
};
module.exports = {
    getFinalReport,
    sendFinalReport,
};
