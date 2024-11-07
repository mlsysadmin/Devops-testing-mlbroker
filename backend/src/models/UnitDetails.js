'use strict'

const { DataTypes } = require('sequelize');
const Sequelize = require('../config/_db/mlbrokerage.db');

const UnitDetails = Sequelize.define('unit_details', {
    unit_detail_id: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    price: {
        allowNull: true,
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    discounted_price: {
        allowNull: true,
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    price_per_sqm: {
        allowNull: true,
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    furnishing: {
        allowNull: true,
        type: DataTypes.ENUM("YES", "NO", "SEMI")
    },
    classification: {
        allowNull: true,
        type: DataTypes.ENUM("New", "Resale")
    },
    no_of_beds: {
        allowNull: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    no_of_bathrooms: {
        allowNull: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    no_of_floors: {
        allowNull: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    parking: {
        allowNull: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    floor_area: {
        allowNull: true,
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    lot_area: {
        allowNull: true,
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
        // defaultValue:Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    },
}, {
    modelName: 'UnitDetails',
    timestamps: false,
})

module.exports = UnitDetails;