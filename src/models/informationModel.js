module.exports = (conn, DataTypes) => {
    const information  = conn.define('informations', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        user_DOB: {
            type: DataTypes.DATE
        },
        user_phone: {
            type: DataTypes.INTEGER
        },
        user_email: {
            type: DataTypes.STRING
        },
        user_location: {
            type: DataTypes.STRING
        },
        user_link: {
            type: DataTypes.STRING
        },
    });
    return information
}