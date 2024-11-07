'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("master_property_lists", {
      master_property_id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER.UNSIGNED
    },
    property_listing_id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        // unique: true,
        references: {
            model: {
              model: "PropertyListing",
              tableName: 'property_listings',
            },
            key: 'property_listing_id',
        },
    },
    seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
            model: {
              model: "User",
              tableName: 'users',
            },
            key: 'user_id',
        },
    },
    property_id: {
        allowNull: false,
        type: Sequelize.STRING(15),
        unique: true
    },
    listing_status: {
        allowNull: false,
        type: Sequelize.ENUM('OPEN', 'PENDING','APPROVED', 'DISAPPROVED')
    },
    property_status: {
        allowNull: false,
        type: Sequelize.ENUM('ACTIVE', 'INACTIVE', 'SOLD')
    },
    approval_date: {
        allowNull: true,
        type: Sequelize.DATE,
        // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
        onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: Sequelize.DATE,
        // defaultValue:Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: true
    },
    deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("master_property_lists")
  }
};
