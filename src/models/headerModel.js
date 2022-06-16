module.exports = (sequelize, DataTypes) => {
    const Header = sequelize.define('headers', {
        user_id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        professional: {
            type: DataTypes.STRING
        }
    })
    return Header;
}