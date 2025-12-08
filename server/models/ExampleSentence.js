'use strict';

module.exports = (sequelize, DataTypes) => {
  const ExampleSentence = sequelize.define('ExampleSentence', {
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
    chinese_sentence: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 500]
      }
    },
    english_translation: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'example_sentences',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  ExampleSentence.associate = function(models) {
    // ExampleSentence belongs to Word
    ExampleSentence.belongsTo(models.Word, {
      foreignKey: 'word_id',
      as: 'word'
    });
  };

  return ExampleSentence;
};
