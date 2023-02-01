const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generator = require("generate-password");
const config = require("../config/auth.config");
const transporter = require("../config/mail.config");
const { validationResult } = require("express-validator");

const Staff = db.staff;
const RefreshToken = db.refreshtoken;

const signup = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, surname, email } = req.body;
        const password = generator.generate({
            length: 10,
            numbers: true,
            symbols: true,
            strict: true,
            exclude: '"'
        });
        console.log(password);
        const userStaff = {
            name,
            surname,
            email,
            password: await bcrypt.hash(password, 10),
        };
        const staff = await Staff.create(userStaff);
        if (!staff) {
            return res.status(409).send("Details are not correct");
        }
        await staff.setRoles([1]);
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: staff.email,
            subject: "Sourcemind",
            html: `<div style="background-color:#fff;">
                    <h2 style="color:#ff6600;">Sourcemind</h2>
                    <h3>Hi ${staff.name} ${staff.surname} jan!</h3>
                    <p>You became a user in sourcemind report.
                    Here is your username and password.</p>
                    <p> Login: <b>${staff.email}</b>.</p>
                    <p>Password: <b>${password}</b>.</p>
                </div>`,
            text: ``,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
        return res.status(201).send(staff);
    } catch (error) {
        res.status(500).send(error);
    }
};

const login = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        const staff = await Staff.findOne({ where: { email: email } });
        if (!staff) {
            return res.status(404).send({ message: "Authentication failed" });
        }
        const passwordIsValid = await bcrypt.compare(password, staff.password);
        
        if (!passwordIsValid) {
            return res.status(404).send({
                message: "Authentication failed",
            });
        }
        refresh(req, res);

        const token = jwt.sign(
            { id: staff.id, exp: Math.round(new Date(Date.now()) / 1000) + 30 },
            config.secret,
        );

        let refreshToken = await createToken(staff);

        let authorities = [];
        const roles = await staff.getRoles();
        roles.forEach((element) => {
            authorities.push("ROLE_" + element.name.toUpperCase());
        });

        res.cookie("refresh", refreshToken, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        res.cookie("jwt", token, { httpOnly: true });
        res.status(201).send({
            id: staff.id,
            name: staff.name,
            email: staff.email,
            roles: authorities,
            status: staff.status,
            // accessToken: token,
            // refreshToken: refreshToken,
        });
    } catch (error) {
        res.status(500).send("Authentication error");
    }
};

const createToken = async (user) => {
    let expiredAt = new Date();

    let _token = jwt.sign(
        { id: user.id, exp: Math.round(new Date(Date.now()) / 1000) + 1296000 },
        config.secret,
    );

    let refreshToken = await RefreshToken.create({
        token: _token,
        userId: user.id,
        expiryDate: expiredAt.getTime(),
    });
    return refreshToken.token;
};

const refresh = async (req, res) => {
    console.log(req.body, "[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[");
};

const verifyExpiration = (token) => {
    return token.expiryDate.getTime() < new Date().getTime();
};

module.exports = {
    verifyExpiration,
    signup,
    login,
};
