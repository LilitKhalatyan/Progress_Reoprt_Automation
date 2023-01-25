const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('progress_report', 'root', 'root123', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.staff = require('./staffModel') (sequelize, DataTypes);
db.roles = require('./rolesModel') (sequelize, DataTypes);
db.students = require('./studentModel') (sequelize, DataTypes);
db.speciality = require('./specialityModel') (sequelize, DataTypes);
db.course = require('./courseModel') (sequelize, DataTypes);
db.subject = require('./subjectModel') (sequelize, DataTypes);
db.session = require('./courseModel') (sequelize, DataTypes);


db.staff.hasOne(db.roles)
// db.students.hasOne(db.speciality)
// db.speciality.hasMany(db.course)
// db.course.hasMany(db.subject)
// db.subject.hasMany(session)


module.exports = db;