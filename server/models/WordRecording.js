'use strict';

module.exports = (sequelize, DataTypes) => {
  const WordRecording = sequelize.define('WordRecording', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    word_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'words',
        key: 'id'
      }
    },
    audio_file_path: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    audio_file_size: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 0,
        max: 10485760 // 10MB in bytes
      }
    },
    audio_mime_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recording_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 1
      }
    }
  }, {
    tableName: 'word_recordings',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  WordRecording.associate = function(models) {
    // WordRecording belongs to Word
    WordRecording.belongsTo(models.Word, {
      foreignKey: 'word_id',
      as: 'word',
      onDelete: 'CASCADE'
    });
  };

  return WordRecording;
};
