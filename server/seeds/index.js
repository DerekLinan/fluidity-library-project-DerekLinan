const { sequelize, Author, Book } = require('../models');
const authors = require('./authorSeeds.json');
const books = require('./bookSeeds.json');

const seedTables = async () => {
  await sequelize.sync({ FORCE: true });
  await Author.bulkCreate(authors);
  await Book.bulkCreate(books);
};

seedTables();
