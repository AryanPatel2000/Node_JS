const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('asso_db', 'root', '', {
    dialect:'mysql'
})


const Ship = sequelize.define('ship', {
    name :DataTypes.TEXT,
    crewCapacity: DataTypes.INTEGER,
    amountOfSailes: DataTypes.INTEGER
}, {timestamps:false});

//sequelize.sync({alter:true})

const Captain = sequelize.define('captain', {
    name: DataTypes.TEXT,
    skillLevel: {
        type: DataTypes.INTEGER,
        validate:{min: 1, max:10}
    }
}, {timestamps:false})

Captain.hasOne(Ship)
Ship.belongsTo(Captain);

    //Lazy Loading 

    Ship.findAll({raw:true})
    .then( (res) => {console.log(JSON.stringify(res, null, 2))})
    .catch( (err) => {console.log(err)})
    
  
//sequelize.sync({alter:true})

