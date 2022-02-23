'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('todos_labels', {
      todo_id: Sequelize.INTEGER,
      label_id: Sequelize.INTEGER,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('todos_labels')
  }
};
