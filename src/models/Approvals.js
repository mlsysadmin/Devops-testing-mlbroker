'use strict';
const {
    DataTypes
} = require('sequelize');

const Sequelize = require('../config/_db/mlbrokerage.db');

const Approvals = Sequelize.define("approvals", {
    approval_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    approval_type: {
        allowNull: false,
        type: DataTypes.ENUM('Listing', 'Application', 'Financing')
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
    application_id: {
        allowNull: true,
        type: DataTypes.INTEGER.UNSIGNED,
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
        type: DataTypes.INTEGER.UNSIGNED,
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
        type: DataTypes.ENUM('PENDING', 'APPROVED', 'DENIED'),
        set(status) {
            this.setDataValue('approval_status', status.toUpperCase());
        }
    },
    // level: {
    //     allowNull: false,
    //     type: DataTypes.ENUM("1", "2", "3"),
    //     get() {
    //         return Number(this.getDataValue("levels"))
    //     },
    //     set(level) {
    //         this.setDataValue('levels', level.toString())
    //     }
    // },
    approval_date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    remarks: {
        allowNull: false,
        type: DataTypes.STRING,
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
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    modelName: 'Approvals',
    timestamps: false,
})

module.exports = Approvals;