'use strict';

const DayJS = require('dayjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('listing_types', [
      {
        listing_type: "For Rent",
        createdAt: DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        listing_type: "For Sale",
        createdAt: DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        listing_type: "Pre-selling",
        createdAt: DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('listing_types', null, {});
  }
};
