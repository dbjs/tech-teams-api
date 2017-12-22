module.exports = (Sequelize, DataTypes) => {
  const Users = Sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    position: {
      type: DataTypes.STRING,
    },
    availability: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    imageurl: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    tech: {
      type: DataTypes.STRING,
    },
  });

  return Users;
};
