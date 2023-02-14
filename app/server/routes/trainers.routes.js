const {
    updateTrainer,
    deleteTrainer,
    getAllTrainers,
} = require("../controllers/trainer.controller");

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept",
        );
        next();
    });

    app.get("/trainers/all", getAllTrainers);
    app.put("/trainers/update/:id", updateTrainer);
    app.delete("/trainers/delete/:id", deleteTrainer);
};
