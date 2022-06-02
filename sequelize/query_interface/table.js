const {Sequelize, DataTypes} = require('sequelize')

//Import sequelize object
const sequelize = require('../query_interface/connection')
const queryInterface = sequelize.getQueryInterface()

//Create Table
const Person = queryInterface.createTable('Person', {
    name: DataTypes.STRING,
    isMember: {
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
    }
})

module.exports = sequelize