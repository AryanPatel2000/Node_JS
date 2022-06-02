const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('subquery_db', 'root', '', {
    dialect:'mysql'
})
//sequelize.authenticate().then(() => {console.log('DONE')}).catch( (err) => {console.log(err)})

module.exports = sequelize