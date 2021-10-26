const multer = require('multer');
const logger = require('morgan');

const imageFilter = (req, file, res) => {
  logger('dev');
  console.log('multer hit');
  console.log(file);
  if (file.mimetype.startsWith('image')) {
    res(null, true);
  } else {
    res('Only images can be uploaded', false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, res) => {
    res(null, __dirname + '/api/uploads/');
  },
  filename: (req, file, res) => {
    res(null, Date.now() + '-lib' + file.originalname);
  },
});

const uploadFile = multer({
  storage: storage,
  limits: 50 * 1024 * 1024,
  fileFilter: imageFilter,
});
module.exports = uploadFile;
