const router = require('express').Router();
const uploadController = require('../controllers/uploadController');
const upload = require('../middleware/upload');

router.route('/').post(upload.single('file'), uploadController.uploadFiles);

module.exports = router;
