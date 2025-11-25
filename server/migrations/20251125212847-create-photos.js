'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('photos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      image_file_path: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      image_file_size: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      image_mime_type: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      caption_chinese: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      caption_english: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    await queryInterface.addIndex('photos', ['created_at']);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('photos');
  }
};
