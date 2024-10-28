'use strict';
const {
    DataTypes
} = require('sequelize');

const Sequelize = require('../config/_db/mlbrokerage.db');

const ApplicationCancellation = Sequelize.define("application_cancellations", {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    application_id: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: {
              model: "Application",
              tableName: 'applications',
          },
          key: 'id',
      },
    },
    status: {
        allowNull: false,
        type: DataTypes.ENUM('Cancelled')
    },
    reason: {
        allowNull: false,
        type: DataTypes.TEXT,
    },
    cancelled_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    modelName: 'ApplicationCancellation',
    timestamps: false,
})

module.exports = ApplicationCancellation;