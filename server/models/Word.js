'use strict';

module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define('Word', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    chinese_characters: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 50]
      }
    },
    pinyin: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    english_definition: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 500]
      }
    },
    putonghua_definition: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 500]
      }
    },
    grammar_category: {
      type: DataTypes.ENUM('Noun', 'Verb', 'Adjective', 'Sayings'),
      allowNull: false,
      validate: {
        isIn: [['Noun', 'Verb', 'Adjective', 'Sayings']]
      }
    },
    audio_file_path: {
      type: DataTypes.TEXT,
      allowNull: true
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
    }
  }, {
    tableName: 'words',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  Word.associate = function(models) {
    // Word has many PinyinSyllables
    Word.hasMany(models.PinyinSyllable, {
      foreignKey: 'word_id',
      as: 'syllables',
      onDelete: 'CASCADE'
    });

    // Word has many ExampleSentences
    Word.hasMany(models.ExampleSentence, {
      foreignKey: 'word_id',
      as: 'examples',
      onDelete: 'CASCADE'
    });
  };

  return Word;
};
