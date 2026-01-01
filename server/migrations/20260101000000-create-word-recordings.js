'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Create the word_recordings table
    await queryInterface.createTable('word_recordings', {
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
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      audio_file_path: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      audio_file_size: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      audio_mime_type: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      recording_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
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

    // Add indexes for performance
    await queryInterface.addIndex('word_recordings', ['word_id']);
    await queryInterface.addIndex('word_recordings', ['word_id', 'recording_order']);

    // Migrate existing audio data from words table to word_recordings
    await queryInterface.sequelize.query(`
      INSERT INTO word_recordings (word_id, audio_file_path, audio_file_size, audio_mime_type, recording_order, created_at, updated_at)
      SELECT id, audio_file_path, audio_file_size, audio_mime_type, 1, created_at, updated_at
      FROM words
      WHERE audio_file_path IS NOT NULL
    `);
  },

  async down (queryInterface, Sequelize) {
    // Restore audio data back to words table before dropping
    await queryInterface.sequelize.query(`
      UPDATE words w
      SET audio_file_path = r.audio_file_path,
          audio_file_size = r.audio_file_size,
          audio_mime_type = r.audio_mime_type
      FROM word_recordings r
      WHERE w.id = r.word_id
      AND r.recording_order = 1
    `);

    await queryInterface.dropTable('word_recordings');
  }
};
