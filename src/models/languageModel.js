module.exports = (sequelize, DataTypes) => {
    const Language = sequelize.define('languages', {

        user_id: {
            type: DataTypes.INTEGER
        },
        name1: {
            type: DataTypes.STRING
        },
        name2: {
            type: DataTypes.STRING

        },
        name3: {
            type: DataTypes.STRING
        }
    })
    return Language;
}