const Sequelize = require('sequelize')
const bcrypt = require('bcrypt');

//import sequelize object
const sequelize = require('../hooks/connection')

//1. Define The Model


    const User = sequelize.define('User', {
        firstName: {
            type:Sequelize.STRING,
            allowNull:false
        },
        email: {
            type:Sequelize.STRING,
            allowNull:false,
            validate: {
                notNull: {
                    msg:'Email is Required'
                },
                isEmail: {
                    msg: 'Please use the correct email format : user@email.com'
                },
            },
        },
        password : {
            type: Sequelize.STRING,
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
        }
    }, {
        timestamps:false,
        tableName: 'tbl_user',
        sequelize,

        hooks:{
                beforeCreate :(user, options) => {
                    return bcrypt.hash(user.password, 10)
                    .then( hash => {
                        user.password = hash;
                    })
                    .catch( (err => {console.log(err)}))
                }
        }
    }); 

sequelize.sync({alter:true})

module.exports = User
