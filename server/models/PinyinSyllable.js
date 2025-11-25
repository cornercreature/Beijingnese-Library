'use strict';

module.exports = (sequelize, DataTypes) => {
  const PinyinSyllable = sequelize.define('PinyinSyllable', {
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
    syllable: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    character: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    tone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 4
      },
      comment: '0=neutral/light, 1-4=standard tones'
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      },
      comment: 'Order position in the word'
    }
  }, {
    tableName: 'pinyin_syllables',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  PinyinSyllable.associate = function(models) {
    // PinyinSyllable belongs to Word
    PinyinSyllable.belongsTo(models.Word, {
      foreignKey: 'word_id',
      as: 'word'
    });
  };

  return PinyinSyllable;
};
