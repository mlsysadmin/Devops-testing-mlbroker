'use strict';
const {
    DataTypes
} = require('sequelize');

const Sequelize = require('../config/_db/mlbrokerage.db');

const Application = Sequelize.define("applications", {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    application_id: {
        allowNull: false,
        type: DataTypes.STRING(11),
        unique: true
    },
    master_property_id: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: {
                model: "MasterPropertyList",
                tableName: 'master_property_lists',
            },
            key: 'master_property_id',
        },
    },
    user_id: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: {
                model: "User",
                tableName: 'users',
            },
            key: 'user_id',
        },
    },
    status: {
        allowNull: false,
        type: DataTypes.ENUM('Processing', 'Approved', 'Closed', 'Cancelled')
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
    modelName: 'Application',
    timestamps: false,
})

module.exports = Application;