'use strict';
const {
  DataTypes
} = require('sequelize');

const Sequelize = require('../config/_db/mlbrokerage.db');

const Role = Sequelize.define("roles", {
  role_id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED
  },
  user_role: {
    allowNull: false,
    type: DataTypes.ENUM('buyer', 'seller', "support")
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {
  modelName: 'Role',
  timestamps: false,
})

// module.exports = (sequelize, DataTypes) => {

//   class Role extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       this.belongsTo(models.User, { as: "User", foreignKey: "role_id" })
//     }
//   }
//   Role.init({
//     role_id: {
//       allowNull: false,
//       primaryKey: true,
//       type: DataTypes.INTEGER
//     },
//     user_role: {
//         allowNull: false,
//         type: DataTypes.ENUM('buyer', 'seller', "support")
//     }
//   }, {
//     sequelize,
//     modelName: 'Role',
//     tableName: "roles"
//   });
//   return Role;
// };

module.exports = Role