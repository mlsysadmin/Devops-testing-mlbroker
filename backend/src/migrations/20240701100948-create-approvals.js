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
    await queryInterface.createTable('approvals', {
      approval_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER.UNSIGNED
    },
    approval_type: {
        allowNull: false,
        type: Sequelize.ENUM('Listing', 'Application', 'Financing')
    },
    property_listing_id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        unique: true,
        references: {
            model: {
                model: "PropertyListing",
                tableName: 'property_listings',
            },
            key: 'property_listing_id',
        },
    },
    application_id: {
        allowNull: true,
        type: Sequelize.INTEGER.UNSIGNED,
        unique: true,
        references: {
            model: {
                model: "Application",
                tableName: 'applications',
            },
            key: 'id',
        },
    },
    approver_id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
            model: {
                model: "Approvers",
                tableName: 'approvers',
            },
            key: 'approver_id',
        },
    },
    approval_status: {
        allowNull: false,
        type: Sequelize.ENUM('PENDING', 'APPROVED', 'DENIED'),
        set(status) {
            this.setDataValue('approval_status', status.toUpperCase());
        }
    },
    // level: {
    //     allowNull: false,
    //     type: Sequelize.ENUM("1", "2", "3"),
    //     get() {
    //         return Number(this.getDataValue("levels"))
    //     },
    //     set(level) {
    //         this.setDataValue('levels', level.toString())
    //     }
    // },
    approval_date: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    remarks: {
        allowNull: false,
        type: Sequelize.STRING,
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
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
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
    await queryInterface.dropTable('approvals');
  }
};
