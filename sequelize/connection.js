
const {Sequelize, DataTypes, Model} = require('sequelize')

//Connection with database
const sequelize = new Sequelize('sql_db', 'root', '', {
    dialect: 'mysql'

})

//Check database connection
sequelize.authenticate()
.then( () => {
    console.log('Connection Estblished Successfully')
}).catch( err => {
    console.log(err)
})

//Create Model

const User = sequelize.define('User', {

    Id :{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,

        sequelize,
        modelName: 'User', 
    },

}, {
    timestamps: false
})
//this creates the table if it doesn't exist (and does nothing if it already exists)
sequelize.sync()

console.log(User === sequelize.models.User)

    // {
    //     //Providing the table name directly
    //     tableName: 'tbl_user'
    // })  


//     //Enforcing the table name to be equal to the model name
//     {   
//         freezeTableName:true
//    }



// =================Create Model With Extending Model========================
class Emp extends Model{}
Emp.init({

    Emp_id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true  
    },
    Name: {

        type : DataTypes.STRING,
        allowNull: false
    },
    City:{
        type : DataTypes.STRING
    }
}, {
    sequelize,
    tableName : 'emp_tbl'
})

console.log(Emp === sequelize.models.Emp)