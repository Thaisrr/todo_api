'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Todos', [
        {
         name: 'Boire du café',
         description: `Le café, c'est la vie`,
            table: 'TODO',
            createdAt:  new Date(),
            updatedAt:  new Date()
       },
      {
        name: 'Profiter du week end',
        description: `Netflix and chill !`,
        table: 'TODO',
          createdAt: new Date(),
          updatedAt:  new Date()
      },
      {
          name: 'Manipuler une API',
          description: '...',
          table: 'DONE',
          createdAt:  new Date(),
          updatedAt:  new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TODOS', null, {});
  }
};
