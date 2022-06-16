const { Sequelize, DataTypes } = require('sequelize'); // require Sequelize

// console.log(config.DB.NAME + " " + config.DB.USERNAME)

const sequelize = new Sequelize('node_cv', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    define: {
        timestamps: false,
        freezTableName: true
    }
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.header = require('./headerModel')(sequelize, DataTypes)
db.work = require('./workModel')(sequelize, DataTypes)
db.skill = require('./skillModel')(sequelize, DataTypes)
db.language = require('./languageModel')(sequelize, DataTypes)
db.information = require('./informationModel')(sequelize, DataTypes)
db.objective = require('./objectiveModel')(sequelize, DataTypes)
db.user = require('./userModel')(sequelize, DataTypes)
db.education = require('./educationModel')(sequelize, DataTypes)




// ==============--------ASSOCIATION---------======================

//cate association with product
// db.category.hasMany(db.product, { foreignKey: 'cat_id' });
// db.product.belongsTo(db.category, { foreignKey: 'cat_id' });


module.exports = db;