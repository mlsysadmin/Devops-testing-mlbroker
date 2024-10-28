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
    await queryInterface.createTable('property_photos', { 
      property_photos_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true
      },
      property_listing_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: {
            model: "PropertyListing",
            tableName: 'property_listings',
          },
          key: 'property_listing_id',
        },
      },
      listing_id: {
        allowNull: false,
        type: Sequelize.STRING,
        // unique: true
      },
      photo: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      upload_date: {
        allowNull: true,
        type: Sequelize.DATE,
        onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
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
    await queryInterface.dropTable('property_photos');
  }
};
