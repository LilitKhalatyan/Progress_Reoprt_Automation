const db = require("../models");
const { Op } = require("sequelize");

const { staff: Staff, role: Roles ,course: Course} = db;

const getTrainerById = async (req, res) => {
    try {
        const id = req.params.id;

        const staff = await Staff.findOne({
            attributes: ["id", "name", "surname", "email"],
            where: {
                id: id,
            },
            include: [
                {
                    model: Course,
                    required:false,
                    attributes: ["id", "name"],
                },
            ],
        });
        if (!staff) {
            return res.status(404).send({ message: "Trainer not found" });
        }
        res.status(200).send([staff]);
    } catch (error) {
        res.status(500).send({ message: "Failed to get Trainer by Id" });
    }
};

const getAllTrainers = async (req, res) => {
    try {
        const staff = await Staff.findAll({
            attributes: ["id", "name", "surname", "email"],
            where: {
                id: {
                    [Op.ne]: 1, // not equal to 1
                },
            },
        });
        if (!staff) {
            return res.status(409).send("Details are not correct");
        }

        return res.status(201).send(staff);
    } catch (error) {
        res.status(500).send({ message: "Failed to get Trainers" });
    }
};

const updateTrainer = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, surname, email, courseId } = req.body;
        const updateInfo = {
            name,
            surname,
            email,
            courseId,
        };

        const trainer = await Staff.update(updateInfo, {
            where: {
                id: id,
            },
        });

        res.status(200).send({ message: "Trainer updated successfully" });
    } catch (error) {
        res.status(500).send({ message: "Failed to update trainer" });
    }
};

const deleteTrainer = async (req, res) => {
    try {
        const id = req.params.id;
        await Staff.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).send({ message: "Trainer deleted succesfully" });
    } catch (error) {
        res.status(500).send({ message: "Failed to delete trainer" });
    }
};

module.exports = {
    getAllTrainers,
    getTrainerById,
    updateTrainer,
    deleteTrainer,
};
