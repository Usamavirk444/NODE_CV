module.exports = (conn, DataTypes) => {
    const objective = conn.define('objectives', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        obj_desc: {
            type: DataTypes.STRING
        },
    });
    return objective
}