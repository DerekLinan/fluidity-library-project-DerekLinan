const router = require('express').Router();
const uploadController = require('../controllers/uploadController');
const upload = require('../middleware/upload');

router
  .route('/')
  .post(upload.single('imageFileInput'), uploadController.uploadFiles);

module.exports = router;
