module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define(
        "group",
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
            // startDate: {
            //   type: sequelize.DATE,
            //   allowNull: false
            // },
            // endDate: {
            //   type: sequelize.DATE,
            //   allowNull: false
            // },
        },
        { timestamps: false },
    );
    return Group;
};
