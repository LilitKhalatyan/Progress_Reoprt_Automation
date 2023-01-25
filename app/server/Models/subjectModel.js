module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define( "subject", {
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
    // startDate: {
    //   type: DataTypes.DATE,
    //   allowNull: false
    // },
    // endDate: {
    //   type: DataTypes.DATE,
    //   allowNull: false
    // },
  }, {timestamps: false}, )
  return Subject
}