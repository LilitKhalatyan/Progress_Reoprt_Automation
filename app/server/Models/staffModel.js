module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define( "staff", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // role: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 2,
    // },
  }, {timestamps: false}, )
  return Staff
}