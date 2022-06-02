
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('asso_db', 'root', '', {
    dialect:'mysql'
})
const Invoice = sequelize.define(
    "Invoice",
    { amount: Sequelize.INTEGER },
    { timestamps: false }
  );
  
  const User = sequelize.define(
    "User",
    { firstName: Sequelize.STRING },
    { timestamps: false }
  );

  User.hasMany(Invoice);
  Invoice.belongsTo(User);

//  sequelize.sync({force:true})

     User.findAll({
        include: [{
          model: Invoice
        }]
      }).then( (res) => {console.log(JSON.stringify(res, null, 2))})
     
    