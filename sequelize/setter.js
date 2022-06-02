const {Sequelize, where} = require('sequelize')
const sequelize = new Sequelize('sql_db', 'root', '', {
    dialect:'mysql'
})

// sequelize.authenticate().then( () => {console.log('Connection Estlablished Successfully')})
// .catch( (err) => {console.log('Connection Error ',err)})

// var dept = sequelize.define('dept', {
//     firstName: {
//       type     : Sequelize.STRING,
//       allowNull: false,
//     },
//     LastName: {
//         type     : Sequelize.STRING,
//         allowNull: false,
//       },
//       fullName: {
//           type: Sequelize.VIRTUAL,
//           get(){
//               return `${this.firstName} ${this.LastName}`;
//           },
//           set(value){
//               throw new Error('Do not try to set the `fullName` value!')
//           }
//       }

//   }, {timestamps:false}
//   );

// // (async () => {
// //     await sequelize.sync({force:true})
// // })()

//  dept.create({
//     firstName:'Manish',
//     LastName: 'Pande'
    
// })

// .then( (res) => {
//     console.log(res.toJSON())
//     console.log('Full Name: ', res.fullName)
//      })
//  .catch( (err) => {console.log(err)})


const User = sequelize.define('user', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
  }, {
    getterMethods: {
        fullName(){ return this.firstName + ' ' + this.lastName}
 
    },
    setterMethods: {
        fullName(value){
            const names = value.split(' ');
            const firstName = names[0];
            const lastName = names.slice(1).join(' ');
            this.setDataValue('firstName', firstName);
            this.setDataValue('lastName', lastName)
        }
    
    }
  });
  
  (async () => {
  //  await sequelize.sync();
   
  })();

let user = User.findAll( { where: 
    { firstName :'Sardar' },
    raw: true
})
.then( (res) => {
console.log(res)

})
.catch( (err) => {console.log(err)})


// let us = User.create({fullName:'Vinoba Bhave'})
//   .then( (res) => {
//         console.log('First Name: ', res.firstName)
//         console.log('Last Name: ', res.lastName)
//         console.log('Full Name: ', res.fullName)
//     })
// .catch( (err) => {console.log(err)})


