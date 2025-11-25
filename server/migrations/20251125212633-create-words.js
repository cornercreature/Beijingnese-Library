'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('words', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      chinese_characters: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      pinyin: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      english_definition: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      putonghua_definition: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      grammar_category: {
        type: Sequelize.ENUM('Noun', 'Verb', 'Adjective', 'Sayings'),
        allowNull: false
      },
      audio_file_path: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      audio_file_size: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      audio_mime_type: {
        type: Sequelize.STRING(100),
        allowNull: true
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

    await queryInterface.addIndex('words', ['grammar_category']);
    await queryInterface.addIndex('words', ['created_at']);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('words');
  }
};
