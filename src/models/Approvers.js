'use strict';
const {
    DataTypes
} = require('sequelize');

const Sequelize = require('../config/_db/mlbrokerage.db');

const Approvers = Sequelize.define("approvers", {
    approver_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    mobile_number: {
        allowNull: false,
        type: DataTypes.STRING(15),
    },
    first_name: {
        allowNull: false,
        type: DataTypes.STRING(60)
    },
    middle_name: {
        allowNull: true,
        type: DataTypes.STRING(60)
    },
    last_name: {
        allowNull: false,
        type: DataTypes.STRING(60)
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true
    },
    level: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    role_id: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: {
            model: "Role",
            tableName: 'roles',
          },
          key: 'role_id',
        },
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
        // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    modelName: 'Approvers',
    timestamps: false,
})

module.exports = Approvers;