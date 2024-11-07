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
    await queryInterface.createTable('amenities', {
      amenity_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER.UNSIGNED
    },
    indoor_features: {
        allowNull: true,
        type: Sequelize.STRING,
        get() {
            return JSON.parse(this.getDataValue('indoor_features'));
        },
        set(indoor) {
            this.setDataValue('indoor_features', JSON.stringify(indoor));
        }
    },
    outdoor_features: {
        allowNull: true,
        type: Sequelize.STRING,
        get() {
            return JSON.parse(this.getDataValue('outdoor_features'));
        },
        set(indoor) {
            this.setDataValue('outdoor_features', JSON.stringify(indoor));
        }
    },
    custom_amenity_id: {
        allowNull: true,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
            model: {
              model: "CustomAmenities",
              tableName: 'custom_amenities',
            },
            key: 'custom_amenity_id',
        },
    },
    custom_inclusion_id: {
        allowNull: true,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
            model: {
              model: "CustomInclusions",
              tableName: 'custom_inclusions',
            },
            key: 'custom_inclusion_id',
        },
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
        // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('amenities');
  }
};
