
const { update, result } = require('lodash');
const {Sequelize, Model,Op, DataTypes} = require('sequelize');

const sequelize = new Sequelize('sql_db', 'root', '', {
    dialect: 'mysql'
});

// sequelize.authenticate()
// .then( () => {
//     console.log('Connection Estblished Successfully')
// }).catch( err => {
//     console.log(err)
// })
const person = sequelize.define('person', {
    name: DataTypes.TEXT,
    city: {type: DataTypes.TEXT,
            defaultValue:'surat'
        },
        age:{
            type: DataTypes.INTEGER,
        }

}, {
    
    timestamps: false
    });

// (async () => {
//     await sequelize.sync({alter:true});
//    //await sequelize.sync()
// })();

//================Creating an instance====================

        const sachin = person.build({
            name:'sachin',
            city:'mumbai',
            age: 50
        })

        const mithali = person.build({
            name:'mithali',
            age: 32
        })
        const smriti = person.build({
            name:'smriti',
            age: 35
        })
        const manohar = person.build({
            name:'manohar',
            city: 'kolkata',
            age: 29
        })

// manohar.save()
// console.log(mithali.toJSON());
// console.log('Data Added in database')

// smriti.save()
// console.log(smriti.toJSON());
// console.log('Data Added in database')

// veda.save()
// console.log(veda.toJSON());
// console.log('Data Added in database')

// sachin.save()
// console.log(sachin.toJSON());
// console.log('Data Added in database')


//========================Updating an instance=======================

// person.findOne({where: {id :8}})
// .then( (Name) => {
//     Name.update({
//         city:'lucknow',
//         age : 38
//     })
//     .then( (result) => {
//         console.log('The new Model Object = ', result.toJSON())
//     })

// } )
// .catch( (err) =>{ console.log(err)})


////========================Deleting an instance=======================

// person.findOne({where: {id : 5}})
// .then( (Name) => {
//     Name.destroy()
// })
// .then( (result) => {
//     console.log('Data Deleted')
// })
// .catch( (err) => { console.log(err)})


//========================Read an instance=======================

// person.findOne( {where : {id : 6}})
// .then( (Name) => {

//     console.log(Name.toJSON());

// }).catch( (err) => { console.log(err)})


//========================Model Querying - Basics =======================

//1.Insert Query

// person.create({
//     name: 'kl',
//     city: 'mohali',
//     age: 32
// }).then( (res) => {
//     console.log(res.toJSON())
//     console.log('Inserted')
// }).catch( (err) => { console.log(err)} )

//2. Select Query

// person.findAll({
//     attributes: ['id','name','city',],
//     raw:true
// }).then((res) => {
//     console.log(res);
// }).catch( (err) => { console.log(err)} )

//3.WHERE clauses

// person.findAll({
//     where: {
//         city:'surat'
//     },
//         raw:true
// }).then((res) => {
//     console.log(res);
// }).catch( (err) => { console.log(err)} )


//4.Operators

// person.findAll({
//     where: {
//         [Op.or] :[{city:'surat'},{city:'lucknow'}]
        
//     },
//     raw:true
// }).then((res) => {
//     console.log(res);
    
// }).catch( (err) => { console.log(err)} )

//5.Update Query

// person.update({name:'Rahul'},
//     {where :{
//         name:'kl'
//     }
// }).then((res) => {
//       console.log(res);
        
//     }).catch( (err) => { console.log(err)} )

//6. Delete Query

// person.destroy({
//     where :{
//         name:'Rahul'
//     }
// }).then((res) => {
//       console.log(res);
//       console.log('Deleted');
        
//     }).catch( (err) => { console.log(err)} )

//7. Bulk



