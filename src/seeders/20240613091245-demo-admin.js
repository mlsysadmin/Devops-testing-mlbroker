'use strict';

/** @type {import('sequelize-cli').Migration} */
const DayJS = require("dayjs");
const { Hash } = require('../utils/_helper/hash.helper');

const birth_date = DayJS("01/17/2000").format('YYYY-MM-DD');

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
   await queryInterface.bulkInsert('users', [
    {
      // user_id: 0,
      ckyc_id: "X231000001441K1",
      mobile_number: "09856346185",
      first_name: "DEVTESTQD",
      middle_name: "",
      last_name: "QDTEST",
      suffix: "",
      birth_date: birth_date,
      email: "jonalyn.mobilla@mlhuillier.com",
      role_id: 1,
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
    await queryInterface.bulkDelete('users', null, {})
  }
};
