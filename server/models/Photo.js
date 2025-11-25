'use strict';

module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    image_file_path: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    image_file_size: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 0,
        max: 5242880 // 5MB in bytes
      }
    },
    image_mime_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    caption_chinese: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 500]
      }
    },
    caption_english: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 500]
      }
    }
  }, {
    tableName: 'photos',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  Photo.associate = function(models) {
    // No associations for Photo model in v1
    // Future: could add user_id when authentication is added
  };

  return Photo;
};
