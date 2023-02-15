const {
    updateSubject,
    createSubject,
    getAllSubject,
    deleteSubject,
    getSubjectbyTrainer,
} = require("../controllers/subject.controller");

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept",
        );
        next();
    });

    app.get("/subject/all", getAllSubject);
    app.post("/subject/create", createSubject);
    app.put("/subject/update/:id", updateSubject);
    app.delete("/subject/delete/:id", deleteSubject);
    app.get("/subject/trainers/:id", getSubjectbyTrainer);
};
