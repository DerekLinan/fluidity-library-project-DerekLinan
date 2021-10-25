'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {}
  Image.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
      },
      data: {
        type: DataTypes.BLOB('long'),
        allowNull: false,
        require: true,
      },
    },

    {
      sequelize,
      tableName: 'Images',
      modelName: 'Image',
    }
  );
  return Image;
};
