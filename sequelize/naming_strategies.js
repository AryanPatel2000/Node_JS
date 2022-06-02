const { type } = require('express/lib/response')
const {Sequelize} = require('sequelize')

const sequelize = require('./query_interface/connection')

const emp = sequelize.define('emp', {
    
    empid:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    firstname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lastname: {
        type:Sequelize.STRING,
        allowNull: false
    },
    empdept: {
        type:Sequelize.STRING,
        allowNull:false
    },
    empsalary: {
        type:Sequelize.INTEGER,
        allowNull:false
    }
}, {
    underscored: true
    })

sequelize.sync({alter:true})

