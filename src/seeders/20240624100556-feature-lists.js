'use strict';

/** @type {import('sequelize-cli').Migration} */

const DayJS = require('dayjs');

const indoor_lists = ["Air Condition", "Alarm System", "Attic", "Balcony", "Bar",
  "Basement", "Broadband Internet", "Built-in Wardrobes", "CCTV",
  "Central Air Condition", "Deducted Cooling", "Deducted Vacuum System", "Driver Room",
  "Ensuite", "Entertainment Room", "Fire Alarm", "Fireplace", "Floorboards",
  "Gym", "Jacuzzi", "Laundry Room", "Lawn", "Library", "Maid Room",
  "Pay TV access", "Powder Room", "Sauna", "Service Area", "Service Kitchen",
  "Smoke Detector", "Split system heating", "Storage Room", "Study Room",
  "Terrace", "Wifi"];

const outdoor_lists = ["Badminton", "Balcony", "Basketball Court", "Carport",
  "Clubhouse", "Courtyard", "Fully Fenced", "Function Area", "Garage", "Garden",
  "Gazebos", "Jacuzzi", "Jogging path", "Lanai", "Landscape Garden",
  "Multi-purpose Lawn", "Open car spaces", "Parking Lot", "Parks",
  "Playground", "Remote Garage", "Secure Parking", "Shower Rooms",
  "Sports Facilities", "Swimming Pool", "Tennis Court", "24/7 Security"]

let features = [];

indoor_lists.forEach((e, i) => {
  const sy = {
    // id: i,
    feature_name: e,
    feature_type: "Indoor",
    createdAt: DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss'),
  }
  features.push(sy)
})

outdoor_lists.forEach((e, i) => {
  const sy = {
    // id: i,
    feature_name: e,
    feature_type: "Outdoor",
    createdAt: DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss'),
  }
  features.push(sy)
})

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('features_lists', features)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('features_lists', null, {});
  }
};
