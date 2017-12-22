const db = require('../index.js');

module.exports = {
  projectSearch: (req, res) => {
    const query = req.body.query.toLowerCase().replace(/\s/g, '');

    db.projects.findAll({
      where: {
        $or: [
      { 'name': { like: '%' + query + '%' } },
      { 'headquarters': { like: '%' + query + '%' } },
      { 'description': { like: '%' + query + '%' } },
      { 'techstack': { like: '%' + query + '%' } },
      { 'user': { like: '%' + query + '%' } }]}})
      .then(body => {
        res.send(body);
      })
      .catch(err => {
        throw err;
      });
  },

  userSearch: (req, res) => {
    const query = req.body.query.toLowerCase().replace(/\s/g, '');

    db.users.findAll({
      where: {
        $or: [
      { 'title': { like: '%' + query + '%' } },
      { 'position': { like: '%' + query + '%' } }]}})
      .then(body => {
        res.send(body);
      })
      .catch(err => {
        throw err;
      });
  },
};
