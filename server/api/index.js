const router = require('express').Router();
const authorRoutes = require('./author');
const bookRoutes = require('./book');
const uploadRoutes = require('./upload');

router.use('/authors', authorRoutes);
router.use('/books', bookRoutes);
router.use('/upload', uploadRoutes);

module.exports = router;
