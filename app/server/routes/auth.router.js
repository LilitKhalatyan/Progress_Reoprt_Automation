const { check, validationResult } = require("express-validator");
const { signup, login } = require("../controllers/auth.controller");
const { checkDuplicateNameOrEmail } = require("../middlewares/verifySignUp.js");

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept",
        );
        next();
    });

    app.post(
        "/auth/signin",
        [
            check("email")
                .isEmail()
                .withMessage("invalid email address")
                .normalizeEmail(),

            check("password")
                .isLength({ min: 8, max: 15 })
                .withMessage(
                    "your password should have min and max length between 8-15",
                )
                .matches(/\d/)
                .withMessage("your password should have at least one number")
                .matches(/[!@#$%^&*(),.?":{}|<>]/)
                .withMessage(
                    "your password should have at least one sepcial character",
                )
                .matches(/[A-Z]/)
                .withMessage(
                    "your password should have at least one uppercase character",
                ),
        ],
        login,
    );
    app.post(
        "/auth/signup",
        [
            check("name")
                .isLength({ min: 3 })
                .withMessage("the name must have minimum length of 3")
                .trim(),

            check("surname")
                .isLength({ min: 3 })
                .withMessage("the surname must have minimum length of 3")
                .trim(),

            check("email")
                .isEmail()
                .withMessage("invalid email address")
                .normalizeEmail(),

            // check("password")
            //     .isLength({ min: 8, max: 15 })
            //     .withMessage(
            //         "your password should have min and max length between 8-15",
            //     )
            //     .matches(/\d/)
            //     .withMessage("your password should have at least one number")
            //     .matches(/[!@#$%^&*(),.?":{}|<>]/)
            //     .withMessage(
            //         "your password should have at least one sepcial character",
            //     )
            //     .matches(/[A-Z]/)
            //     .withMessage(
            //         "your password should have at least one uppercase character",
            //     ),
        ],
        checkDuplicateNameOrEmail,
        signup,
    );
};
