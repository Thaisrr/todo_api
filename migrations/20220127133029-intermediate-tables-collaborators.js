'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tables_collaborators', {
      table_id: Sequelize.INTEGER,
      user_id: Sequelize.INTEGER,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tables_collaborators')
  }
};
