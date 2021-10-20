const router = require('express').Router();
import authorRoutes from './author';
import bookRoutes from './book';

router.use('/authors', authorRoutes);
router.use('/books', bookRoutes);

module.exports = router;
