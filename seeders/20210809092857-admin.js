'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: '06896bd4-8cbc-48c6-8c46-9364a6d939c4',
        username: 'admin',
        email: 'admin@gmail.com',
        password:
          '$2b$10$/jAVQe8ZpthhRvgLYWAIG./ACvAgehDCOwSw1/9mOAQLqfyPNiBN2', // password = admin
        role: 'SuperAdmin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '06896bd4-8cbc-48c6-8c46-9754a6d645c4',
        username: 'user',
        email: 'user@gmail.com',
        password:
          '$2b$10$/jAVQe8ZpthhRvgLYWAIG./ACvAgehDCOwSw1/9mOAQLqfyPNiBN2', // password = admin
        role: 'PlayerUser',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
