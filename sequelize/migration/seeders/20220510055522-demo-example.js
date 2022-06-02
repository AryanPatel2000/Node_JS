'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('examples', [{
        name: 'John Doe',
        city: 'Huston',
        email:'jhon@email.com'
      }, {
        name: 'John Dwen',
        city: 'Berlin',
        email:'dwen@email.com'
      }, {
        name: 'Henry Ford',
        city: 'New York',
        email:'henry@email.com'
      }, {
        name: 'Roshani Nadar',
        city: 'Banglore',
        email:'roshani@email.com'
      }, {
        name: 'Aman Gupta',
        city: 'Hydrabad',
        email:'Aman@email.com'
      }, {
        name: 'Prafull Billore',
        city: 'Bhopal',
        email:'mbainfo@email.com'
      }]);
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('People', null, {});
     
  }
};
