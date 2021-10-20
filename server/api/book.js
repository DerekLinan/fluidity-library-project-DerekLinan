const router = require('express').Router();
import bookController from '../controllers/bookController';

router.route('/').get(bookController.findAll).post(bookController.create);
router
  .route(':id')
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.delete);

module.exports = router;
