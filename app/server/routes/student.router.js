const { verifyIt } = require("../middlewares/verify");
const {
    addOne,
    getAll,
    getOne,
    updateOne,
    deleteOne,
} = require("../controllers/student.controller");

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept",
        );
        next();
    });

    app.post("/add", verifyIt, addOne);
    app.get("/all", verifyIt, getAll);
    app.get("/:id", verifyIt, getOne);
    app.put("/:id", verifyIt, updateOne);
    app.delete("/:id", verifyIt, deleteOne);
};
