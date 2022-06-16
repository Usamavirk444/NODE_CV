module.exports = (conn, DataTypes) => {
    const user = conn.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING

        },
        email: {
            type: DataTypes.STRING

        },
        password: {
            type: DataTypes.STRING
        }
    });
    return user
}