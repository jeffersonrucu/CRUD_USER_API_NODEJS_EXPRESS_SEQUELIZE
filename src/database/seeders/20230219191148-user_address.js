'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_address', [{
      name: 'Jefferson Oliveira',
      password: '3fbc647b2d883633239905a82294a742:fdeea5e0cb9e48fe1b90dd7a6deda20b935d35ad9929e3db0e4c1539ad56ba6355ba4e4bde48736e504977c30377c588bbaa205974a44fd562bdc30a7b1862a9',
      email: 'jefferoidtex7@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_address', null, {});
  }
};
