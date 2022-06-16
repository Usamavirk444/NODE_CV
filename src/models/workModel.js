module.exports = (sequelize, DataTypes) => {
    const Header = sequelize.define('works', {
        user_id: {
            type: DataTypes.INTEGER
        },
        works_name1: {
            type: DataTypes.STRING
        },
        work_start1: {
            type: DataTypes.DATE
        },
        work_end1: {
            type: DataTypes.DATE
        },
        work_desc1: {
            type: DataTypes.STRING
        },
        work_name2: {
            type: DataTypes.STRING
        },
        work_start2: {
            type: DataTypes.DATE
        },
        work_end2: {
            type: DataTypes.DATE
        },
        work_desc2: {
            type: DataTypes.STRING
        },

    })
    return Header;
}