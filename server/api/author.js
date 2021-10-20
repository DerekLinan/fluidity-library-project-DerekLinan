const router = require('express').Router();
import authorController from '../controllers/authorController';

router.route('/').get(authorController.findAll).post(authorController.create);
router
  .route(':id')
  .get(authorController.findById)
  .put(authorController.update)
  .delete(authorController.delete);

module.exports = router;
