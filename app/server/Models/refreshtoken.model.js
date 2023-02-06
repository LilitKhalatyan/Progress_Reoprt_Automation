const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
    const RefreshToken = sequelize.define("refreshToken", {
        token: {
            type: DataTypes.STRING,
        },
        expiryDate: {
            type: DataTypes.DATE,
        },
    });

    return RefreshToken;
};
