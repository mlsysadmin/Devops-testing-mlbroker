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
    await queryInterface.createTable('approvers', {
      approver_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      mobile_number: {
        allowNull: false,
        type: Sequelize.STRING(15),
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      middle_name: {
        allowNull: true,
        type: Sequelize.STRING(60)
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      suffix: {
        allowNull: true,
        type: Sequelize.STRING(5)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      level: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      role_id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: {
            model: "Role",
            tableName: 'roles',
          },
          key: 'role_id',
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
    await queryInterface.dropTable('approvers');
  }
};
