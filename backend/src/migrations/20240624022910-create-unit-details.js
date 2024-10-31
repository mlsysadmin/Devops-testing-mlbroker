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
    await queryInterface.createTable('unit_details', { 
        unit_detail_id: {
            allowNull: false,
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        price: {
            allowNull: true,
            type: Sequelize.DECIMAL(10, 2),
            defaultValue: 0
        },
        discounted_price: {
            allowNull: true,
            type: Sequelize.DECIMAL(10, 2),
            defaultValue: 0
        },
        price_per_sqm: {
            allowNull: true,
            type: Sequelize.DECIMAL(10, 2),
            defaultValue: 0
        },
        furnishing: {
            allowNull: true,
            type: Sequelize.ENUM("YES", "NO", "SEMI")
        },
        classification: {
            allowNull: true,
            type: Sequelize.ENUM("New", "Resale")
        },
        no_of_beds: {
            allowNull: true,
            type: Sequelize.INTEGER.UNSIGNED
        },
        no_of_bathrooms: {
            allowNull: true,
            type: Sequelize.INTEGER.UNSIGNED
        },
        no_of_floors: {
            allowNull: true,
            type: Sequelize.INTEGER.UNSIGNED
        },
        parking: {
            allowNull: true,
            type: Sequelize.INTEGER.UNSIGNED
        },
        floor_area: {
            allowNull: true,
            type: Sequelize.DECIMAL(10, 2),
            defaultValue: 0
        },
        lot_area: {
            allowNull: true,
            type: Sequelize.DECIMAL(10, 2),
            defaultValue: 0
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: true,
            onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
            defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
            // defaultValue:Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        },
     });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('unit_details');
  }
};
