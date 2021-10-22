const { Author, Book } = require('../models');
const { Op } = require('sequelize');
const logger = require('morgan');

module.exports = {
  create: (req, res) => {
    const { first_name: fn, last_name: ln } = req.body.Author;
    let author;
    Author.findOrCreate({
      where: {
        first_name: fn,
        last_name: ln,
      },
    })
      .then((ret) => {
        const data = { ...req.body, AuthorId: ret[0].dataValues.id };
        Book.create(data)
          .then(() => res.json())
          .catch((e) => res.status(500).json(e));
      })
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
  search: (req, res) => {
    const { search } = req.query;
    Book.findAll({
      include: [Author],
      where: {
        [Op.or]: [
          { title: { [Op.substring]: search } },
          { '$Author.first_name$': { [Op.substring]: search } },
          { '$Author.last_name$': { [Op.substring]: search } },
        ],
        defaults: { first_name, last_name },
      },
    })
      .then((book) => res.json(book))
      .catch((e) => res.status(500).json(e));
  },
  update: (req, res) => {
    Book.update(req.body, {
      where: { id: req.params.id },
    })
      .then(() => {
        Author.update(req.body.Author, {
          where: { id: req.body.AuthorId },
        })
          .then(() => res.status(200).json())
          .catch((e) => res.status(500).json(e));
      })
      .then((ret) => res.status(200).json(ret))
      .catch((e) => res.status(501).json(e));
  },
};
