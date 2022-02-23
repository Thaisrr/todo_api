'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Todos', [
        {
         name: 'Boire du café',
         description: `Le café, c'est la vie`,
         table_id: 1,
            createdAt:  new Date(),
            updatedAt:  new Date()
       },
      {
        name: 'Profiter du week end',
        description: `Netflix and chill !`,
        table_id: 1,
          createdAt: new Date(),
          updatedAt:  new Date()
      },
      {
          name: 'Manipuler une API',
          description: '...',
          table_id: 2,
          createdAt:  new Date(),
          updatedAt:  new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TODOS', null, {});
  }
};
