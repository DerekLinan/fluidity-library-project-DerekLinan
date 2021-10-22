const router = require('express').Router();
const authorRoutes = require('./author');
const bookRoutes = require('./book');
const logger = require('morgan');

router.use('/authors', authorRoutes);
router.use('/books', bookRoutes);

module.exports = router;
