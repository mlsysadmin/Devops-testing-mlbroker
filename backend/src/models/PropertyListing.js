'use strict';
const {
  DataTypes
} = require('sequelize');

const Sequelize = require('../config/_db/mlbrokerage.db');

const level = process.env.LISTING_APPROVAL_LEVEL;

const PropertyListing = Sequelize.define("property_listings", {
  property_listing_id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true
  },
  listing_id: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  property_id: {
    allowNull: true,
    type: DataTypes.STRING(15),
    unique: true
  },
  seller: {
    allowNull: false,
    type: DataTypes.STRING(100)
  },
  // seller_id: {
  //   allowNull: false,
  //   type: DataTypes.INTEGER.UNSIGNED,
  //   references: {
  //     model: {
  //       model: "User",
  //       tableName: 'users',
  //     },
  //     key: 'user_id',
  //   },
  // },
  property_type_id: {
    allowNull: true,
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: {
        model: "PropertyTypes",
        tableName: 'property_types',
      },
      key: 'property_type_id',
    },
  },
  listing_type_id: {
    allowNull: true,
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: {
        model: "ListingTypes",
        tableName: 'listing_types',
      },
      key: 'listing_type_id',
    },
  },
  unit_detail_id: {
    allowNull: true,
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: {
        model: "UnitDetails",
        tableName: 'unit_details',
      },
      key: 'unit_detail_id',
    },
  },
  location_id: {
    allowNull: true,
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: {
        model: "Location",
        tableName: 'locations',
      },
      key: 'location_id',
    },
  },
  amenity_id: {
    allowNull: true,
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: {
        model: "Amenities",
        tableName: 'amenities',
      },
      key: 'amenity_id',
    },
  },
  property_photos_id: {
    allowNull: true,
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: {
        model: "PropertyPhoto",
        tableName: 'property_photos',
      },
      key: 'property_photos_id',
    },
  },
  title: {
    allowNull: true,
    type: DataTypes.STRING(100),
  },
  description: {
    allowNull: true,
    type: DataTypes.TEXT
  },
  listing_status: {
    allowNull: false,
    type: DataTypes.ENUM('DRAFT', 'PENDING', 'APPROVED', 'DENIED')
  },
  level: {
    allowNull: false,
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: level
  },
  current_level: {
    allowNull: false,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    // onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  }
}, {
  modelName: 'PropertyListing',
  timestamps: false,
})

module.exports = PropertyListing;