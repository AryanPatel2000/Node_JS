const {Sequelize} = require('sequelize');

const account = require('../scopes/project');
 
account.bulkCreate([
    {name:'Radhe',city:'Surat',branch:'Sarthana',type:'Savings',status:true},
    {name:'Jay',city:'Surat',branch:'Varachha',type:'Current',status:true},
    {name:'Gopal',city:'Bhavnagar',branch:'ISKON',type:'Savings',status:true},
    {name:'Madhav',city:'Bhavnagar',branch:'Nilambaug',type:'Current',status:true},
    {name:'Dev',city:'Surat',branch:'Ring Road',type:'Current',status:false},
    {name:'Vasu',city:'Bhavnagar',branch:'MG Road',type:'Savings',status:false},

    
], {raw:true})
.then(( res) => {console.log(res)})
.catch( (err) => {console.log(err)})

account.findAll({raw:true})
.then(( res) => {console.log(res)})
.catch( (err) => {console.log(err)})

