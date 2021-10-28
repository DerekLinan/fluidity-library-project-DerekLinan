const multer = require('multer');
const logger = require('morgan');

const imageFilter = (req, file, res) => {
  if (file.mimetype.startsWith('image')) {
    res(null, true);
  } else {
    res('Only images can be uploaded', false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, res) => {
    res(null, __basedir + '/resources/uploads');
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
