module.exports = (Sequelize, DataTypes) => {
  const Positions = Sequelize.define('positions', {
    user: {
      type: DataTypes.STRING,
    },
    project: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    requirements: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    availability: {
      type: DataTypes.STRING,
    },
    projectdescription: {
      type: DataTypes.STRING,
    }
  });

  return Positions;
};
