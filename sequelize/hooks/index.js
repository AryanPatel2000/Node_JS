const {Sequelize} = require('sequelize')
const bcrypt = require('bcrypt')

const User = require('../hooks/user')




 User.afterCreate(async (user, options) => {
    console.log('New User Created: ')

    console.log('Name: ', user.firstName);
    console.log('Email: ', user.email);
    console.log('Password: ', user.password);
    console.log('User Id: ', user.id)
 })


//beforeCreate Hook

User.addHook('beforeCreate', 'hashPassword', ( async (user, options) => {

    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
}))

// Remove Hooks
User.removeHook('beforeCreate', 'hashPassword', (user, options) => {

})
//console.log('Hooks Succefully Removed....')

// afterCreate hook
 
User.afterCreate(async (user, options) => {
    console.log('New User Created: ')

    console.log('Name: ', user.firstName);
    console.log('Email: ', user.email);
    console.log('Hash Password: ', user.password);
    console.log('User Id: ', user.id)
})

User.create({
    firstName:'rav',
    email:'rav@gmail.com',
    password:'100100'
})