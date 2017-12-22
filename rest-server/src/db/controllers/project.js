const db = require('../index.js');

module.exports = {
  createProject: (req, res) => {
    const project = {
      name: req.body.name,
      headquarters: req.body.headquarters,
      description: req.body.description,
      imageurl: req.body.imageurl,
      techstack: req.body.techstack,
      websites: req.body.websites,
      status: 'active',
      user: req.body.user,
    };

    const projectuser = {
      user: req.body.user,
      project: req.body.name,
      projectdescription: req.body.description,
    }

    db.projects.create(project)
      .then(body => {
        db.positions.create(projectuser);
        res.status(200).send(body);
      })
      .catch(err => {
        throw err;
      });
  },

  updateProject: (req, res) => {
    const project = {
      headquarters: req.body.headquarters,
      description: req.body.description,
      imageurl: req.body.imageurl,
      techstack: req.body.techstack,
      websites: req.body.websites,
      status: req.body.status,
      user: req.body.user,
    };

    db.projects.update(project, { where: { name: req.body.name } })
      .catch(err => {
        throw err;
      });
  },

  getProject: (req, res) => {
    const name = req.body.name;
    const data = {};

    db.projects.findOne({ where: { name: name} })
      .then(pinfo => {
        data.pinfo = pinfo;
        db.positions.findAll({ where: { project: name} })
          .then(positions => {
            data.positions = positions;
            res.send(data);
          })
          .catch(err => {
            throw err;
          })
      })
      .catch(err => {
        throw err;
      })
  }
}
