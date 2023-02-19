'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('person_legal_entity', {
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
      id_legal_entity: {
        type: Sequelize.BIGINT,
        references: {
          model: 'legal_entity',
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
    await queryInterface.dropTable('person_legal_entity');
  }
};
