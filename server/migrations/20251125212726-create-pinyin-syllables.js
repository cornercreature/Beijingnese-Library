'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pinyin_syllables', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      word_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'words',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      syllable: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      character: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      tone_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '0=neutral/light, 1-4=standard tones'
      },
      position: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Order position in the word'
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

    await queryInterface.addIndex('pinyin_syllables', ['word_id']);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pinyin_syllables');
  }
};
