'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate({ Book }) {
      this.hasMany(Book, { onDelete: 'CASCADE', hooks: true });
    }
  }
  Author.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        validate: {
          len: [1, 255],
        },
      },
      last_name: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'Authors',
      modelName: 'Author',
    }
  );
  return Author;
};
