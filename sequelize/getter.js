const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('sql_db', 'root', '', {
    dialect:'mysql'
})

sequelize.authenticate().then( () => {console.log('Connection Estlablished Successfully')})
.catch( (err) => {console.log('Connection Error ',err)})

const tbl = sequelize.define('tbl', {
    id : {
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true    
        },
    firstName:{
        type: Sequelize.STRING,
        allowNull:false,

        get(){
            return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
        },
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull:false
    },
    city:{
        type: Sequelize.STRING
    }, 
},{
    tableName : 'tbl_demo',
    timestamps: false,
    ignoreDuplicate: true
});

 (async () => {
     await sequelize.sync()
})()

const ins = tbl.create({
    firstName:'M.S.',
    lastName: 'Dhoni',
    city: 'Ranchi'
})
.then( (res) => {
   console.log(res.get('firstName'))
  
  
    })
.catch( (err) => {console.log(err)})









