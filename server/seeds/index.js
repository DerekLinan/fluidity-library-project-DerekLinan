import { sequelize, Author, Book } from '../models';
import authors from './authorSeeds.json';
import books from './bookSeeds.json';

const seedTables = async () => {
  await sequelize.sync({ FORCE: true });
  await Author.bulkCreate(authors);
  await Book.bulkCreate(books);
};

seedTables();
