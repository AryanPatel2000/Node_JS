const {Sequelize} = require('sequelize')

const  sequelize = new Sequelize('scopes_db', 'root', '', {
    dialect:'mysql'
})
//sequelize.authenticate().then( () => {console.log("SUCCESS")} ).catch( (err) => {console.log(err)})

module.exports = sequelize;