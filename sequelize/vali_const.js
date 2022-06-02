const {Sequelize, DataTypes, Op } = require("sequelize")

const sequelize = new Sequelize('sql_db', 'root', '', {
    dialect: 'mysql'
})

 sequelize.authenticate()
 .then( () => {console.log('Connection Estlablished Successfully...')})
 .catch( (err) => {console.log('Connection Error ', err)})


    

    const demo = sequelize.define('demo',{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Name is Required',
                },
                notEmpty: {
                    msg: 'Please Provide a Name'
                },

            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg :'Email alredy taken'
            },
            validate: {
                notNull: {
                    msg: 'An Email is Requirted',
                },
                isEmail: {
                    msg: 'Please use the correct email format : user@example.com'
                    
                },
                
            },
        },
        dob:{
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please Provide a bhirthday',
                },
                isDate: {
                    msg: 'Please Use the Proper Date Format : mm/dd/yyyy'
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Password is Required'
                },
                notEmpty: {
                    msg: 'Please Provide Password'
                },
                len: {
                    args: [5,10],
                    msg: 'The password must be 5 to 10 character long..'
                },
            },
        },
         
    }, {
            timestamps:false, 
            tableName:'tbl_val', 
            sequelize,
            operatorsAliases: false 
            
        })


 (async () => {
     await sequelize.sync({alter:true});
    //await sequelize.sync()
 })();


const user1 = demo.create({
    name: 'chahal',
    email: 'chahal@gmail.com',
    dob:'1975-10-20',
    password:'1975yuzi',
     raw:true
})

.then( (res) => {
    console.log(res.toJSON())
})
.catch( (err) => {

        console.log(err)

})