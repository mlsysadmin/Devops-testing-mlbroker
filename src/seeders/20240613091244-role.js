'use strict';
const DayJS = require("dayjs");

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
    await queryInterface.bulkInsert('roles', [
      {
        role_id: 0,
        user_role: "support",
        createdAt: DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        role_id: 1,
        user_role: "seller",
        createdAt: DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        role_id: 2,
        user_role: "buyer",
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
    await queryInterface.bulkDelete('roles', null, {});
  }
};
