'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users',
        'table_id',
        {type: Sequelize.INTEGER})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'table_id')
  }
};
