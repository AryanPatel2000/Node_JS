const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    dialect : dbConfig.dialect
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.capitals = require('./capital.model.js')(sequelize, Sequelize);

module.exports = db;