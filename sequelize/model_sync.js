const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('sql_db','root', '', {
    dialect: 'mysql'
})

sequelize.authenticate()
.then( () => {
    console.log('Connection Estblished Successfully')
}).catch( err => {
    console.log(err)
})

const Emp = sequelize.define('Emp', {

    Id :{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    City: {
        type: DataTypes.STRING,

    },
    dept: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    tableName: 'emp_tbl',
    timestamps:false
})
//This creates the table if it doesn't exist (and does nothing if it already exists)
sequelize.sync()

//This creates the table, dropping it first if it already existed
//sequelize.sync({force: true})

//Performs the necessary changes in the table to make it match the model.
sequelize.sync({alter: true})