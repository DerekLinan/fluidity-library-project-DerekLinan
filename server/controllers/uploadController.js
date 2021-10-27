const fs = require('fs');
const { Image } = require('../models');

module.exports = {
  uploadFiles: (req, res) => {
    if (req.file == undefined) {
      return res.status(400).send('Must select a file');
    }

    Image.create({
      name: req.file.originalname,
      type: req.file.mimetype,
      data: fs.readFileSync(
        __basedir + '/resources/uploads/' + req.file.filename
      ),
    })
      .then((image) => {
        fs.writeFileSync(
          __basedir + '/resources/tmp/' + image.name,
          image.data
        );

        return res.status(200).json({ id: image.id });
      })
      .catch((e) => {
        console.log(e);
        res.status(500).json(e);
      });
  },
  get: (req, res) => {
    console.log('attempting to get image...');
    Image.findByPK({
      where: {
        name: req.body.name,
      },
    })
      .then((image) => res.json(image))
      .catch((e) => res.satus(500).json(e));
  },
  findById: (req, res) => {
    Image.findByPk(req.params.id)
      .then((image) => res.json(image))
      .catch((e) => res.satus(500).json(e));
  },
};
