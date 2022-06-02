const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('./conn')

const account = sequelize.define('account', {
    id: { 
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name: {
        type:DataTypes.STRING,
        allowNull:false
    },
    city: {
        type:DataTypes.STRING,
        allowNull:false
    },
    branch: {
        type:DataTypes.STRING,
        allowNull:false
    },
    type: {
        type:DataTypes.STRING,
        allowNull: false,

        validate: {
            isIn:{
                args:[['Savings', 'Current']],
                msg:'Must be Savings or Current'
            }
        }
    },
    status: {
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
}, {
    tableName:'tbl_account',
    timestamps:false,

  //  Default Scope
    defaultScope:{
        where:{
            status: false
        },
       
    },
 
})


//sequelize.sync({alter:true})

module.exports = account;