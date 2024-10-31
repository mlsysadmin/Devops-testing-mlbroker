'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('features_lists', {
      feature_list_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      feature_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      feature_type: {
        allowNull: false,
        type: Sequelize.ENUM("indoor", "outdoor"),
      },
      // indoor_features: {
      //     allowNull: false,
      //     type: Sequelize.ENUM("Air Condition", "Alarm System", "Attic", "Balcony", "Bar", 
      //         "Basement", "Broadband Internet", "Built-in Wardrobes", "CCTV", 
      //         "Central Air Condition", "Deducted Cooling", "Deducted Vacuum System", "Driver Room",
      //         "Ensuite", "Entertainment Room", "Fire Alarm", "Fireplace", "Floorboards", 
      //         "Gym", "Jacuzzi", "Laundry Room", "Lawn", "Library", "Maid Room", 
      //         "Pay TV access", "Powder Room", "Sauna", "Service Area", "Service Kitchen", 
      //         "Smoke Detector", "Split system heating", "Storage Room", "Study Room", 
      //         "Terrace", "Wifi"
      //     ),
      // },
      // outdoor_features: {
      //     allowNull: false,
      //     type: Sequelize.ENUM("Badminton", "Balcony", "Basketball Court", "Carport", 
      //         "Clubhouse", "Courtyard", "Fully Fenced", "Function Area", "Garage", "Garden",
      //         "Gazebos", "Jacuzzi", "Jogging path", "Lanai", "Landscape Garden", 
      //         "Multi-purpose Lawn", "Open car spaces", "Parking Lot", "Parks", 
      //         "Playground", "Remote Garage", "Secure Parking", "Shower Rooms", 
      //         "Sports Facilities", "Swimming Pool", "Tennis Court", "24/7 Security"
      //     ),
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
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
        // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
      //   deletedAt: {
      //     type: Sequelize.DATE,
      //     allowNull: true,
      //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      //   },
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('features_lists');
  }
};
