'use strict';
const {
  DataTypes
} = require('sequelize');

const Sequelize = require('../config/_db/mlbrokerage.db');

const PropertyTypes = Sequelize.define("property_types", {
  property_type_id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED
  },
  type: {
      allowNull: true,
      // primaryKey: true,
      type: DataTypes.ENUM("Commercial", "Residential", "Industrial")
  },
  subtype: {
    allowNull: true,
    type: DataTypes.ENUM("Service Office", "Shop/Retail", "Commercial Land/Lot", "Condominium", "House & Lot", "Townhouse", "Warehouse", "Farm Lot", "Hotel/Resort")
  }
},{
  modelName: 'PropertyTypes',
  timestamps: false,
})

module.exports = PropertyTypes;