'use strict';

const { Hash } = require('../utils/_helper/hash.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // function notNullIfUserIsSeller(instance) {
    //   if (instance.role_id === 2 && (instance.license === null || instance.license === undefined)) {
    //     throw new Error('license cannot be null if user_role is seller');
    //   }
    // }


    // const HashPass = async (pass) => {
    //   try {
    //     return await Hash(pass);
    //   } catch (error) {
    //     return error
    //   }
    // }

    await queryInterface.createTable('users', {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true
      },
      ckyc_id: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      mobile_number: {
        allowNull: false,
        type: Sequelize.STRING(15),
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      middle_name: {
        allowNull: true,
        type: Sequelize.STRING(60)
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      suffix: {
        allowNull: true,
        type: Sequelize.STRING(5)
      },
      birth_date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      // password: {
      //   allowNull: false,
      //   type: Sequelize.STRING(100),
      //   async set(pass) {
      //     this.setDataValue('password', await HashPass(pass))
      //   }
      // },
      // user_desc: {
      //   allowNull: false,
      //   type: Sequelize.ENUM("I'm a licensed real estate broker", "I'm a real estate agent", "I'm looking for my nexthome Buy/Rent", "I'm looking to Sell/Rent")
      // },
      role_id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: {
            model: "Role",
            tableName: 'roles',
          },
          key: 'role_id',
        },
      },
      // license: {
      //   allowNull: true,
      //   validate: {
      //     notNullIfUserIsSeller(value) {
      //       notNullIfUserIsSeller(this)
      //     }
      //   },
      //   type: Sequelize.BLOB
      // },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};