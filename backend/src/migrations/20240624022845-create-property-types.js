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
    await queryInterface.createTable('property_types', { 
      property_type_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      type: {
          allowNull: true,
          // primaryKey: true,
          type: Sequelize.ENUM("Commercial", "Residential", "Industrial")
      },
      subtype: {
        allowNull: true,
        type: Sequelize.ENUM("Service Office", "Shop/Retail", "Commercial Land/Lot", "Condominium", "House & Lot", "Townhouse", "Warehouse", "Farm Lot", "Hotel/Resort")
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
    await queryInterface.dropTable('property_types');
  }
};
