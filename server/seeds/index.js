const { sequelize, Author, Book } = '../models';
const authors = './authorSeeds.json';
const books = './bookSeeds.json';

const seedTables = async () => {
  await sequelize.sync({ FORCE: true });
  await Author.bulkCreate(authors);
  await Book.bulkCreate(books);
};

seedTables();
