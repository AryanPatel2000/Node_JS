const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('hooks_db', 'root', '', {
    dialect:'mysql'
})

module.exports = sequelize
