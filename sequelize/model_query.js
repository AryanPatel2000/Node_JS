const {Sequelize, DataTypes, STRING} = require('sequelize')

const sequelize = new Sequelize('sql_db', 'root', '', {
    dialect:'mysql'
})
// sequelize.authenticate()
// .then( () => {
//     console.log('Connection Estlablished Successfully...')
// }).catch( (err) => { console.log(err)})


// Creating the model

module.exports = (sequelize) => {
const state = sequelize.define('state', {
    id : {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    state: {type: DataTypes.STRING, allowNull:false} ,
    capital: {type: DataTypes.STRING, allowNull:false }

},{
    timestamps: false,
    tableName: 'tbl_bulk'


});
return state;
};

// .then((res) => {
//     console.log(res);
// }).catch( (err) => { console.log(err)} )


//Insert in bulk

// state.bulkCreate([
//     {state: 'Gujarat', capital: 'Gandhinagar'},
//     {state: 'Maharashtra', capital: 'Mumbai'},
//     {state: 'Goa', capital: 'Panji'},
//     {state: 'Bihar', capital: 'Patan'},
//     {state: 'UP', capital: 'Lucknow'},
//     {state: 'Karnataka', capital: 'Banglore'},
    
// ], {
//     ignoreDuplicate: true,
    
// }).then( (res) => {
//         console.log(res);
//         console.log("Users data have been saved")
//     })
// .catch( (err) => {console.log(err)})


// Ordering 

// state.findAll({
//     order:[
//         ['state', 'ASC']
        
//     ],
//     raw:true
// }).then((res) => {
   
//     console.log(res);
// }).catch( (err) => { console.log(err)} )


//  Grouping

// state.findAll({
//     group: 'capital',
//     raw:true

//     })
// .then((res) => {
   
//      console.log(res);
//  }).catch( (err) => { console.log(err)} )

 //Limits and Pagination

// Fetch 4 instances/rows
//  state.findAll({
//     limit:4,
//     raw:true

//     })
// .then((res) => {
   
//      console.log(res);
//  }).catch( (err) => { console.log(err)} )


 // skip 4 instances/rows
//  state.findAll({
//     offset:4,
//     raw:true

//     })
// .then((res) => {
   
//      console.log(res);
//  }).catch( (err) => { console.log(err)} )

//Skip 5 instances/row and fetch the 1 after that

// state.findAll({
//     offset:5,
//     limit:1

// }).then((res) => {
//     console.log(res);
// }).catch( (err) => { console.log(err)} )