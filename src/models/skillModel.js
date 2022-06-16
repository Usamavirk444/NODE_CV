module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define('skills', {

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
        },
        name4: {
            type: DataTypes.STRING
        }
    })
    return Skill;
}