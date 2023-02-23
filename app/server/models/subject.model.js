module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define(
        "subject",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            courseId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            staffId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            balls: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        { timestamps: false },
    );
    return Subject;
};
