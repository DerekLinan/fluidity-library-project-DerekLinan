const router = require('express').Router();
const authorController = require('../controllers/authorController');

router.route('/').get(authorController.findAll).post(authorController.create);

router
  .route('/:id')
  .get(authorController.findById)
  .put(authorController.update)
  .delete(authorController.delete);

module.exports = router;
