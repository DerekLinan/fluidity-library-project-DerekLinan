'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({ Author }) {
      this.belongsTo(Author, {
        foreignKey: { name: 'AuthorId', allowNull: false },
      });
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
      rating: { type: DataTypes.FLOAT },
      image: {
        type: DataTypes.STRING,
        validate: {
          isUrlSimple(value) {
            if (!value.startsWith('http://')) {
              throw new Error('Validation isUrlSimple on image failed');
            }
          },
          // isUrl: { require_protocol: true, require_tld: false },
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
