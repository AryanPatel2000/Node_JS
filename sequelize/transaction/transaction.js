const  {Sequelize, DataTypes} = require('sequelize'); 


const  sequelize = new Sequelize('trans_db', 'root', '', {
    dialect:'mysql'
})

sequelize.authenticate().then( () => {console.log('SUCCESS')})

    const emp = sequelize.define('emp', {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false, 
        autoIncrement:true,
        primaryKey:true
    },
    firstName : {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName : {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {tableName:'tbl_emp' ,timestamps:false});


  const emp_info = sequelize.define('emp_info', {
      dept: {
          type: DataTypes.STRING,
          allowNull: false
      }
  }, {tableName:'tbl_dept' ,timestamps:false})

//sequelize.sync({alter:true})

//Managed Transaction
const Managed = async () => {
    try{
    await sequelize.transaction(async  (transaction) => {

        const Emp = await emp.create(
            {firstName: 'Virat', lastName:'Kohli'},
            {transaction}
        );
       const dept = await emp_info.create(
            {dept:'Sports'},
            {id:Emp.id},
            {transaction}
        )
            console.log('SUCCESS');
            console.log(Emp.toJSON())
            console.log(dept.toJSON())
    
        })
       
        //    const Emp = await emp.findOne({
        //     where:{ id:1},
        //     transaction,
            
        //    })
        //    console.log(Emp.toJSON())
    }
    catch(error)
    {
        console.log(error)
    }
}
//Managed()

 //Unmanaged Transactions

// const unManaged = async () =>{
//     let transaction;
//     try{

//         transaction = await sequelize.transaction();
      
//             const Emp = await emp.create(
//                 {firstName:'Elon', lastName:'Musk'},
//                 {transaction }
//                 );

//            const dept = await emp_info.create(
//                     {dept:'Production'},
//                     {id:Emp.id},
//                     {transaction}
//                 )

//         console.log(Emp.toJSON())
//         console.log(dept.toJSON())
//         await transaction.commit()     
       
//     }
//     catch( error)  {
//         console.log(error);
//         if(transaction){
//             await transaction.rollback();
//         }
//     }
//   }
//unManaged()

