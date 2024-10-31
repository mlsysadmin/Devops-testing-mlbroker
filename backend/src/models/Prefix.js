'use strict';
const {
  DataTypes
} = require('sequelize');

const Sequelize = require('../config/_db/mlbrokerage.db');

const Prefix = Sequelize.define("id_prefixes", {
    prefix_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },
      prefix: {
        allowNull: false,
        type: DataTypes.STRING(3)
      },
      prefix_type_name: {
        allowNull: false,
        type: DataTypes.ENUM('Listing', 'Application', 'Financing')
      }
}, {
  modelName: 'Prefix',
  timestamps: false,
})

module.exports = Prefix;