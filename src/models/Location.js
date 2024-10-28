'use strict';
const {
  DataTypes
} = require('sequelize');

const Sequelize = require('../config/_db/mlbrokerage.db');

const Location = Sequelize.define("locations", {
  location_id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED
  },
  subdivision: {
      allowNull: true,
      type: DataTypes.STRING(60)
  },
  city: {
    allowNull: true,
    type: DataTypes.STRING(30)
  },
  province: {
    allowNull: true,
    type: DataTypes.STRING(30)
  },
  country: {
    allowNull: true,
    type: DataTypes.STRING(100)
  },
  zipcode: {
    allowNull: true,
    type: DataTypes.INTEGER(20)
  },
  other: {
    allowNull: true,
    type: DataTypes.STRING(100)
  },
  map_location: {
    allowNull: true,
    type: DataTypes.STRING
  }
},{
  modelName: 'Location',
  timestamps: false,
})

module.exports = Location;