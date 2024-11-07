'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('locations', { 
      location_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      subdivision: {
          allowNull: true,
          type: Sequelize.STRING(60)
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING(30)
      },
      province: {
        allowNull: true,
        type: Sequelize.STRING(30)
      },
      other: {
        allowNull: true,
        type: Sequelize.STRING(30)
      },
      zipcode: {
        allowNull: true,
        type: Sequelize.INTEGER(20)
      },
      map_location: {
        allowNull: true,
        type: Sequelize.STRING
      }
     });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('locations');
  }
};
