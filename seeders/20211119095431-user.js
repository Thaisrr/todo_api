'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'toto@mail.fr',
        password: '$2b$10$jKmSZQQ5R/XArUarTErKM.IOv3NyFM26AyADb/Gs7wTGDqt1y9LM6',
        createdAt:  new Date(),
        updatedAt:  new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
