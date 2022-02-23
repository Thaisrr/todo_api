'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tables', [
        {
         name: 'My First Table',
         createdAt:  new Date(),
         updatedAt:  new Date()
       },
      {
        name: 'Another Table',
        createdAt: new Date(),
        updatedAt:  new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tables', null, {});
  }
};
