module.exports = (conn, DataTypes) => {
    const education = conn.define('educations', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        degree_name1: {
            type: DataTypes.STRING
        },
        start_date1: {
            type: DataTypes.DATE
        },
        end_date1: {
            type: DataTypes.DATE
        },
        degree_name2: {
            type: DataTypes.STRING
        },
        start_date2: {
            type: DataTypes.DATE
        },
        end_date2: {
            type: DataTypes.DATE
        },
    });
    return education
}