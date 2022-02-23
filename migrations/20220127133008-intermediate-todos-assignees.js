'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('todos_assignees', {
      todo_id: Sequelize.INTEGER,
      user_id: Sequelize.INTEGER,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('todos_assignees');
  }
};
