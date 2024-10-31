'use strict'

const { DataTypes, DATE } = require('sequelize');
const Sequelize = require('../config/_db/mlbrokerage.db');

const MasterPropertyList = Sequelize.define("master_property_lists", {
    master_property_id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    property_listing_id: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        // unique: true,
        references: {
            model: {
              model: "PropertyListing",
              tableName: 'property_listings',
            },
            key: 'property_listing_id',
        },
    },
    seller: {
        allowNull: false,
        type: DataTypes.STRING(100)
    },
    // seller_id: {
    //     allowNull: false,
    //     type: DataTypes.INTEGER.UNSIGNED,
    //     references: {
    //         model: {
    //           model: "User",
    //           tableName: 'users',
    //         },
    //         key: 'user_id',
    //     },
    // },
    property_id: {
        allowNull: false,
        type: DataTypes.STRING(15),
        unique: true
    },
    listing_status: {
        allowNull: false,
        type: DataTypes.ENUM('PENDING', 'APPROVED', 'DENIED')
    },
    property_status: {
        allowNull: false,
        type: DataTypes.ENUM('ACTIVE', 'INACTIVE', 'SOLD')
    },
    approval_date: {
        allowNull: true,
        type: DataTypes.DATE,
        // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
        onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    isFeatured: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: DataTypes.DATE,
        // defaultValue:Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: true
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
    },
},
    {
        modelName: 'MasterPropertyList',
        timestamps: false,
    }
)

module.exports = MasterPropertyList;