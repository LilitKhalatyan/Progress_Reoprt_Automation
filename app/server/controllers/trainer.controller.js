const db = require("../models");

const { staff: Staff, role: Roles } = db;

const getAllTrainers = async (req, res) => {
    try {
        const staff = await Staff.findAll({
            attributes: ["id", "name", "surname", "email"],
            include: [
                {
                    model: Roles,
                    where: {
                        id: 1,
                    },
                    required: true,
                },
            ],
        });
        if (!staff) {
            return res.status(409).send("Details are not correct");
        }
       
        return res.status(201).send(staff);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateTrainer = async (req, res) => {
    try {
        const { name, surname, email, courseId, id } = req.body;
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

        res.status(200).send({ message: "trainer updated successfully" });
    } catch (error) {
        res.status(500).send(error);
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
        res.status(200).send({ message: "trainer deleted succesfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    updateTrainer,
    deleteTrainer,
    getAllTrainers,
};
