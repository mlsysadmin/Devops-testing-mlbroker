'use strict';
const {
    DataTypes
} = require('sequelize');

const Sequelize = require('../config/_db/mlbrokerage.db');

const Amenities = Sequelize.define("amenities", {
    amenity_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    indoor_features: {
        allowNull: true,
        type: DataTypes.TEXT,
        get() {
            return JSON.parse(this.getDataValue('indoor_features'));
        },
        set(indoor) {
            this.setDataValue('indoor_features', JSON.stringify(indoor));
        }
    },
    outdoor_features: {
        allowNull: true,
        type: DataTypes.TEXT,
        get() {
            return JSON.parse(this.getDataValue('outdoor_features'));
        },
        set(indoor) {
            this.setDataValue('outdoor_features', JSON.stringify(indoor));
        }
    },
    custom_amenity_id: {
        allowNull: true,
        type: DataTypes.INTEGER.UNSIGNED,
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
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: {
              model: "CustomInclusions",
              tableName: 'custom_inclusions',
            },
            key: 'custom_inclusion_id',
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
    }
}, {
    modelName: 'Amenities',
    timestamps: false,
})

module.exports = Amenities;