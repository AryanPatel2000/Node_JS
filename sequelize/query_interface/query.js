const {Sequelize, DataTypes} = require('sequelize')

const Person = require('../query_interface/table')
const queryInterface = Person.getQueryInterface()


//adding column to table
queryInterface.addColumn('Person','city', {type: DataTypes.INTEGER, allowNull:false })

//Changing the datatype of a column
queryInterface.changeColumn('Person', 'city', {
    type:DataTypes.STRING,
    allowNull:false
})

//Removing a Column
queryInterface.removeColumn('Person', 'isMember')

queryInterface.addColumn('Person', 'email', {
    type:DataTypes.STRING,
    allowNull:false
})

//adding column Constraint

queryInterface.addConstraint('Person', {
    fields:['email'],
    type:'unique',
    name:'unique_email'
})

//Insert multiple records into a table

queryInterface.bulkInsert('Person', [
    {name:'Radhe', city:'Surat', email:'radhe@gmail.com'},
    {name:'Gopal', city:'Bhavnagar', email:'Gopal@gmail.com'},
    {name:'Hari', city:'Surat', email:'hari@gmail.com'},
    {name:'Jay', city:'Bhavnagar', email:'jay@gmail.com'},
    {name:'Shree', city:'Surat', email:'shree@gmail.com'},
])