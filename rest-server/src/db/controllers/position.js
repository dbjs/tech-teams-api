const db = require('../index.js');

module.exports = {
  addPosition: (req, res) => {
    const position = {
      user: req.body.user,
      project: req.body.project,
      title: req.body.title,
      requirements: req.body.requirements,
      description: req.body.description,
      availability: req.body.availability,
    };

    db.positions.create(position)
      .then(data => {
        res.send(data);
      })
      .catch((err) => {
        throw err;
      });
  },

  updatePosition: (req, res) => {
    const position = {
      user: req.body.user,
      requirements: req.body.requirements,
      description: req.body.description,
      availability: req.body.availability,
    };

    db.positions.update(position, { where: { project: req.body.project, title: req.body.title } })
      .catch(err => {
        throw err;
      });
  }

  deletePosition: (req, res) => {
    db.positions.destroy({ where: { project: req.body.project, title: req.body.title, description: req.body.description } })
      .catch(err => {
        throw err;
      });
  },
};
