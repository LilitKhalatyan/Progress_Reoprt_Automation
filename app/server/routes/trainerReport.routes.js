const {
    getTrainerReport,
    editTrainerReport,
    updateTrainerReport,
    createTrainerReport,
} = require("../controllers/trainerReport.controller");

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept",
        );
        next();
    });

    app.put("/trainer_report/edit/:id", editTrainerReport);
    app.post("/trainer_report/create", createTrainerReport);
    app.put("/trainer_report/update/:id", updateTrainerReport);
    app.get(
        "/trainer_report/course/:courseId/subject/:subjectId",
        getTrainerReport,
    );
};
