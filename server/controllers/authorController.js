const { Author } = require('../models');

module.exports = {
  create: (req, res) => {
    Author.create(req.body)
      .then(() => res.json())
      .catch((e) => res.status(500).json(e));
  },
  delete: (req, res) => {
    Author.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.json())
      .catch((e) => res.status(500).json(e));
  },
  findAll: (req, res) => {
    Author.findAll()
      .then((author) => res.json(author))
      .catch((e) => res.satus(500).json(e));
  },
  findById: (req, res) => {
    Author.findByPk(req.params.id)
      .then((author) => res.json(author))
      .catch((e) => res.satus(500).json(e));
  },
  update: (req, res) => {
    Author.update(req.body)
      .then(() => res.json())
      .catch((e) => res.status(500).json(e));
  },
};
