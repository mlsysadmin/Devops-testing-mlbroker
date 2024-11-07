'use strict';
const {
    DataTypes
} = require('sequelize');

const Sequelize = require('../config/_db/mlbrokerage.db');

const SoldProperties = Sequelize.define("sold_properties", {
    sold_property_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED
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
    buyer_id: {
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
    sale_price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    sale_date: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
        onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
    },
}, {
    modelName: 'SoldProperties',
    timestamps: false,
})

module.exports = SoldProperties;