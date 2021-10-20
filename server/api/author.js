const router = require('express').Router();
import authorController from '../controllers/authorController';

console.log('author 1');
router.route('/').get(authorController.findAll).post(authorController.create);
console.log('author 1.5');
router
  .route(':id')
  .get(authorController.findById)
  .put(authorController.update)
  .delete(authorController.delete);
console.log('author 2');
module.exports = router;
