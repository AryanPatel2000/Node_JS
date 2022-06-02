const {Sequelize, Op} = require('sequelize')

const sequelize = new Sequelize('sql_db', 'root', '', {
    dialect:'mysql'
});

// sequelize.authenticate()
// .then( () => {console.log('Connection Estlablished...')})
// .catch( (err) => { console.log('Connection Error', err)})

const state = require(`${__dirname}/model_query.js`)(sequelize);
    
//Model Querying - Finders

    //1.findAll
/* state.findAll({raw:true}).then( (states) => {
    
    console.log(states);
    sequelize.close()
}).catch( (err) => {console.log(err)}) */

    //2.findByPk
/* state.findByPk(3)
.then( (res) => { 
    if(res === null){console.log('Not Found')}
   
    else {console.log(res instanceof state)}

    console.log(res.toJSON())
    })
.catch( (err) => {console.log(err)}) */

    //3.findOne
/* 
state.findOne( {where : {capital : 'Chennai'}})
.then( (cap) => {
    if(cap == null){console.log('Not Found')}
    else {console.log(cap.toJSON())}
})
.catch( (err) => {console.log(err)}) 
*/

    //4.findOrCreate 
/*
state.findOrCreate( {
    where : {capital: 'Shillong'},
    defaults : {
            state: 'Meghalaya',
            capital: 'Shillong'
    }
}).then( ([res, created]) => {

    if(res === null){console.log('Not Found')}
    else {console.log(res.get({raw:true}))}
    console.log(created)
}).catch( (err) => {console.log(err)})
*/

    //5.findAndCountAll
/*    
state.findAndCountAll({raw:true})
.then( (res) => {console.log(res)})
.catch( (err) => {console.log(err)})
 
state.findAndCountAll({
    where: {
        id:{
            [Op.between]: [6, 10]
        },     
    },
    raw:true
})
.then( (res) => { 
    console.log(res)
    })
.catch( (err) => { console.log(err)})
*/