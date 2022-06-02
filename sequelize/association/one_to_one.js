const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('asso_db', 'root', '', {
    dialect: 'mysql'
})
//sequelize.authenticate().then( () => {console.log('SUCCESS')}).catch( (err) => {console.log('Connection Error ', err)} )

//Model -1
const Person = sequelize.define('Person', {
    id: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
}, { timestamps:false, tableName:'tbl_person' })

sequelize.sync({alter:true})
    
 //Model -2

 const House = sequelize.define('house', {
     id: {
         type:DataTypes.INTEGER,
         autoIncrement:true,
         primaryKey:true
     },
     address: {
         type: DataTypes.STRING,
         allowNull:false
     }
 }, {timestamps:false, tableName: 'tbl_house'})

 
Person.hasOne(House)
House.belongsTo(Person)
//sequelize.sync({alter:true})
const res =  Person.findOne({
    where: {
      firstName: "Vijay"
    },
   // include:House,
    
  }).then( (res) => {

  console.log('First Name:', res.firstName);
  console.log('Last Name:', res.lastName);
  console.log('Age:', res.age);
  const hisHouse =  res.getHouse();

 //Do stuff with the address
  console.log('Address:', hisHouse.address);
})
   
 const tasks =  Person.findAll({ include: House })


 console.log(JSON.stringify(tasks));



  //Insert in Bulk Model-1

Person.bulkCreate([
    {firstName: 'Vijay', lastName:'Rupani', age:60},
    {firstName: 'Bhupendra', lastName:'patel', age:55},
    {firstName: 'Anandi', lastName:'Patel', age:50},
    {firstName: 'Acharya', lastName:'Devvrat', age:65},
    {firstName: 'OP', lastName:'Kohli', age:70},
    
])


.then( (res) => {
    console.log(res),
   console.log('Data Saved')
}).catch( (err) => {console.log(err)})


//  //Insert in Bulk Model-2


  House.bulkCreate([
     {address: 'RTO Circle'},
     {address:'Vijayraj Nagar'},
     {address: 'Victoria'},
     {address: 'Jewels'},
     {address: 'Sardar Patel Society'}
 ])


 .then( (res) => {
     console.log(res),
    console.log('Data Saved')
}).catch( (err) => {console.log(err)})






  