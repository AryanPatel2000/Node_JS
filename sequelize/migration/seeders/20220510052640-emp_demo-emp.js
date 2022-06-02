'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
          await queryInterface.bulkInsert('Emps', [{
          firstName:'Manish',
          lastName:'Pandey',
          dept:'Production',
          city:'Surat',
          createdAt: new Date(),
          UpdatedAt :new Date()
      },{
        firstName:'Gaurav',
        lastName:'Modi',
        dept:'Marketing',
        city:'Surat',
        createdAt: new Date(),
        UpdatedAt: new Date()
      }]);
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Emp', null, {});
     
  }
};
