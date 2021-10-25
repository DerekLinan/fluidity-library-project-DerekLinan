const fs = require('fs');
const { Image } = require('../models');

module.exports = {
  uploadFile: (req, res) => {
    console.log(req.file);

    if (req.file === undefined) {
      return res.status(400).send('Must select a file');
    }

    Image.create({
      name: req.file.originalName,
      type: req.file.mimetype,
      data: fs.readFileSync(__dirname + '/api/uploads/' + req.file.filename),
    })
      .then((image) => {
        fs.writeFileSync(__dirname + '/api/temp/' + image.name, image.data);

        return res.status(200);
      })
      .catch((e) => res.status(500).json(e));
  },
};
