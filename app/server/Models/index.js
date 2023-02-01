const config = require("../config/db.config");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
    },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.role = require("./roles.model")(sequelize, DataTypes);
db.staff = require("./staff.model")(sequelize, DataTypes);
db.group = require("./group.model")(sequelize, DataTypes);
db.course = require("./course.model")(sequelize, DataTypes);
db.session = require("./course.model")(sequelize, DataTypes);
db.subject = require("./subject.model")(sequelize, DataTypes);
db.students = require("./student.model")(sequelize, DataTypes);
db.speciality = require("./speciality.model")(sequelize, DataTypes);
db.refreshtoken = require("./refreshtoken.model")(sequelize, DataTypes);

db.role.belongsToMany(db.staff, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "staffId",
});

db.staff.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "staffId",
    otherKey: "roleId",
    as: "roles",
});

db.group.belongsToMany(db.staff, {
    through: "groups_model",
    foreignKey: "groupId",
    otherKey: "staffId",
});
db.staff.belongsToMany(db.group, {
    through: "groups_model",
    foreignKey: "staffId",
    otherKey: "groupId",
});

module.exports = db;
