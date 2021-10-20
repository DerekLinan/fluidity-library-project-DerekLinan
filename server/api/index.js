const router = require('express').Router();
const authorRoutes = './author';
const bookRoutes = './book';

console.log('api 1');
router.route('/authors', authorRoutes);
console.log('api 1.5');
router.route('/books', bookRoutes);
console.log('api 2');

module.exports = router;
