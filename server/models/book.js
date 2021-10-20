'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({ Author }) {
      this.belongsTo(Author, { foreignKey: { allowNull: false } });
    }
  }
  Book.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        validate: {
          len: [1, 255],
        },
      },
      synopsis: { type: DataTypes.TEXT, defaultValue: '' },
      pages: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        validate: {
          isGreaterThanZero(value) {
            if (value < 1) {
              throw new Error('Number of pages must be greater than 0');
            }
          },
        },
      },
      rating: { type: DataTypes.INTEGER },
      image: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
      published: { type: DataTypes.DATEONLY },
    },
    {
      sequelize,
      tableName: 'Books',
      modelName: 'Book',
      paranoid: true,
    }
  );
  return Book;
};
