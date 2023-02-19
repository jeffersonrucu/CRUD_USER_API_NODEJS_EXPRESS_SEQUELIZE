'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('person_physical_person', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      id_person: {
        type: Sequelize.BIGINT,
        references: {
          model: 'person',
          key: 'id'
        }
      },
      id_physical_person: {
        type: Sequelize.BIGINT,
        references: {
          model: 'physical_person',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('person_physical_person');
  }
};
