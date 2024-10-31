'use strict';
const {
  DataTypes
} = require('sequelize');

const Sequelize = require('../config/_db/mlbrokerage.db');

const ListingTypes = Sequelize.define("listing_types", {
  listing_type_id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED
  },
  listing_type: {
      allowNull: true,
      primaryKey: true,
      type: DataTypes.ENUM("For Rent", "For Sale", "Pre-selling")
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
},{
  modelName: 'ListingTypes',
  timestamps: false,
})

module.exports = ListingTypes;