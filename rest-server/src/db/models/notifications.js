module.exports = (Sequelize, DataTypes) => {
  const Notifications = Sequelize.define('notifications', {
    type: {
      type: DataTypes.STRING,
    },
    sender: {
      type: DataTypes.STRING,
    },
    recipient: {
      type: DataTypes.STRING,
    },
    position: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    }
  });

  return Notifications;
};
