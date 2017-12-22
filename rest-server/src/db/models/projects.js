module.exports = (Sequelize, DataTypes) => {
  const Projects = Sequelize.define('projects', {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    headquarters: {
      type: DataTypes.STRING,
    },
    imageurl: {
      type: DataTypes.STRING,
    },
    techstack: {
      type: DataTypes.STRING,
    },
    websites: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    user: {
      type: DataTypes.STRING,
    }
  });

  return Projects;
};
