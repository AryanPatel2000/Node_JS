
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('sql_db', 'root', '', {
    dialect: 'mysql'
})

//Bind Parameter

sequelize.query('SELECT * ,"text with literal $$1 and literal $$city" as t FROM people WHERE city = $city',

{bind : {city:'surat'}, type: sequelize.QueryTypes.SELECT})
.then( (res) => {console.log(res)})
.catch( (err) => {console.log(err)})

// sequelize.query('SELECT *, "text with literal $$1 and literal $$name" as t FROM people WHERE name = $1',
//   { bind: ['mithali'], type: sequelize.QueryTypes.SELECT }
// ).then(function(res) {
//   console.log(res)
// })
// .catch( (err) => {console.log(err)})

// Replacements

//  sequelize.query('SELECT * FROM people WHERE name LIKE  :search_name ',
//     {replacements: { search_name : 'm%'}, type:sequelize.QueryTypes.SELECT})
// .then( (res) => {console.log(res)})
// .catch( (err) => {console.log(err)})


// sequelize.query('SELECT * FROM people WHERE name = :name', 
// {
//     replacements: {name: 'hardik'}, type:sequelize.QueryTypes.SELECT
// })
// .then( (res) => {console.log(res)})
// .catch( (err) => {console.log(err)})



// sequelize.query('SELECT * FROM people WHERE name = ?',
//     {replacements: ['mahi'], type:sequelize.QueryTypes.SELECT})
// .then( (res) => {console.log(res)})
// .catch( (err) => {console.log(err)})


//Select

// sequelize.query('SELECT * FROM `people` ', {type: sequelize.QueryTypes.SELECT})
// .then( (res) => 
// {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

//  Update

// sequelize.query('UPDATE people SET name = "Dinesh" , city = "Banglore" WHERE id = 9', {type: sequelize.QueryTypes.UPDATE})
// .then( (res) => 
// {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })


