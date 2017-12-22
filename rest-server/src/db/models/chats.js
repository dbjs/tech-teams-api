module.exports = (Sequelize, DataTypes) => {
  const Chats = Sequelize.define('chats', {
    link: {
      type: DataTypes.STRING,
    },
  });


  return Chats;
};
