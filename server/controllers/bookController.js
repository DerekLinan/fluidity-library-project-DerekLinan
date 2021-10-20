const { Author, Book } = require('../models');

module.exports = {
  create: (req, res) => {
    Book.create(req.body)
      .then(() => res.json())
      .catch((e) => res.status(500).json(e));
  },
  delete: (req, res) => {
    Book.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.json())
      .catch((e) => res.status(500).json(e));
  },
  findAll: (req, res) => {
    Book.findAll({ include: [Author] })
      .then((book) => res.json(book))
      .catch((e) => res.satus(500).json(e));
  },
  findById: (req, res) => {
    Book.findByPk(req.params.id, { include: [Author] })
      .then((book) => res.json(book))
      .catch((e) => res.satus(500).json(e));
  },
  update: (req, res) => {
    Book.update(req.body)
      .then(() => res.json())
      .catch((e) => res.status(500).json(e));
  },
};
