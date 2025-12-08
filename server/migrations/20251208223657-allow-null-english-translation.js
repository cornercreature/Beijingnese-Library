'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('example_sentences', 'english_translation', {
      type: Sequelize.TEXT,
      allowNull: true,
      defaultValue: ''
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('example_sentences', 'english_translation', {
      type: Sequelize.TEXT,
      allowNull: false
    });
  }
};
