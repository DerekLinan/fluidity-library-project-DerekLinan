const router = require('express').Router();
const uploadController = require('../controllers/uploadController');
const upload = require('../middleware/upload');

router
  .route('/')
  .post(upload.single('imageFileInput'), uploadController.uploadFiles);
router.route('/:id').get(uploadController.findById);

module.exports = router;
