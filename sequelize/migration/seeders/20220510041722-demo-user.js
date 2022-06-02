'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
       await queryInterface.bulkInsert('Users', [{
       firstName: 'Jay',
       lastName: 'Shetty',
       email:'jay@email.com',
       createdAt:new Date(),
       updatedAt: new Date()
     
     }]);
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {})
  }
};
