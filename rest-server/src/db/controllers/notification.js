const db = require('../index.js');

module.exports = {
  createNotification: (req, res) => {
    const notification = {
      type: req.body.type,
      sender: req.body.sender,
      recipient: req.body.recipient,
      position: req.body.position,
      status: 'active',
    }


    db.users.findOne({ where: { email: notification.recipient }})
      .then(info => {
        if(info) {
          db.notifications.create(notification)
            .then(data => {
              res.status(200).send(data);
            })
            .catch(err => {
              throw err;
            });
        } else {
          res.status(204).send(null);
        }
      })
      .catch(err => {
        throw err;
      })
  },

  updateNotification: (req, res) => {
    const notification = {
      type: req.body.type,
      sender: req.body.sender,
      recipient: req.body.recipient,
      position: req.body.position,
      status: 'inactive',
    }

    db.notifications.update(notification,
      { where: {
        type: req.body.type,
        sender: req.body.sender,
        recipient: req.body.recipient,
        position: req.body.position,
        status: 'active'
      }})
      .then(body => {
        res.send(body);
      })
      .catch(err => {
        throw err;
      })
  }
}
