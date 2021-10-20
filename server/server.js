const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const { sequelize } = require('./models');
const PORT = process.env.PORT || 8080;

const authorController = require('./controllers/authorController');
const bookController = require('./controllers/bookController');

const corsOptions = {
  origin: 'http://localhost:1234',
};

app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/dist'));
}
app.use(express.static('public'));
app.use('/api/authors', authorController);
app.use('api/books', bookController);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`API server listening on http://localhost:${PORT}!`);
  });
});
