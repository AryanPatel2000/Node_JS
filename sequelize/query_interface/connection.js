const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('qinterface_db', 'root', '', {
    dialect:'mysql'
})

module.exports = sequelize