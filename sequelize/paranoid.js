const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('paranoid_db', 'root', '', {
    dialect:'mysql'
})

//sequelize.authenticate().then( () => { console.log('Connection Estlablished')}).catch( (err) => { console.log(err)})

const emp = sequelize.define("emp", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    
  }, {
    paranoid: true,
    
  });

  //sequelize.sync({alter:true})

//     emp.bulkCreate([
//      {name: 'Vijay', city: 'Rajkot'},
//      {name: 'Sunil', city: 'Bhavnagar'},
//      {name: 'Ramesh', city: 'Surat'},
//      {name: 'Paresh', city: 'Surat'},
//      {name: 'Dev', city: 'Rajkot'},
//      {name: 'Shefali', city: 'Baroda'},
    
//  ], {raw:true})


//  .then( (res) => {
//      console.log(res),
//     console.log('Data Saved')
// }).catch( (err) => {console.log(err)})




// emp.findAll({raw:true})
// .then( (res) => {
//     console.log(res),
//    console.log('Data Saved')
// }).catch( (err) => {console.log(err)})


// emp.destroy({
//     where: {
//         id:6
//     }
// })
// .then( (res) => {
//     console.log(res)
// }).catch( (err) => {console.log(err)})   

// emp.create({name:'shri', city:'Surat'})
// .then( (res) => {console.log(res.toJSON())})
// .catch((err) => {console.log(err)})
// console.log('Data Saved')

// emp.destroy({where :{id: 7}})
// .then( (res) => {console.log(res) 
//     console.log('soft-deleted!')
// })
// .catch((err) => {console.log(err)})

// emp.restore({
//     where: {id: 6}
// }).then( (res) => {console.log(res) 
//     console.log('Restored..')
// })
// .catch((err) => {console.log(err)});


emp.findAll({raw:true})
.then( (res) => {
    console.log(res)
}).catch( (err) => {console.log(err)})