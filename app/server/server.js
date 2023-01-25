const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const sequelize = require("sequelize");
const db = require("./Models");

const app = express();
const PORT = process.env.PORT || 5506;

app.use(express.json());

const corsOptions = {
  origin: `http://localhost:3000`,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize
  .sync({ force: false })
  .then((data) => {
    console.log("db has been re-sync");
  })
  .catch((err) => {
    console.log("Error whyle syncing table & model");
  });

const staffRouter = require("./Routes/staffRouter");
// const studentRouter = require("./Routes/studentRouter");

app.use("/staff", staffRouter);
// app.use("/students", studentRouter);
app.all('*', (req, res) => res.status(404).json({ error: `URL ${req.url} not found` }))


app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
