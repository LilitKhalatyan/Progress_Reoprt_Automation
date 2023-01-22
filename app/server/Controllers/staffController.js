const bcrypt = require("bcrypt");
const db = require("../Models");
const jwt = require("jsonwebtoken");

const Staff = db.staff;

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const data = {
      name,
      email,
      password: await bcrypt.hash(password, 10),
    };
    const staff = await Staff.create(data);
    if (staff) {
      let token = jwt.sign({ id: staff.id }, process.env.secretKey);
      // res.cookie("jwt", token, { httpOnly: true });
      return res.status(201).send(staff);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const staff = await Staff.findOne({ where: { email: req.body.email } });
    if (staff) {
      const isSame = await bcrypt.compare(password, staff.password);
      if (isSame) {
        let token = jwt.sign({ id: staff.id }, process.env.secretKey);
        // res.cookie("jwt", token, { httpOnly: true });
        res.status(201).json({
          name: staff.name,
          staff: staff.id,
          token,
        });
        return;
      } else {
        return res.status(401).send("Authentication failed");
      }
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    res.status(500).send("Authentication error");
  }
};

module.exports = {
  signup,
  login,
};
