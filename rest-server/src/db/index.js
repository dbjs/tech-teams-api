const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const rds = require('./rds.js');

const sequelize = new Sequelize('techteams', rds.username, rds.password, {
  host: rds.link,
  port: 3306,
  logging: console.log,
  maxConcurrentQueries: 100,
  dialect: 'mysql',
  dialectOptions: {
    ssl: 'Amazon RDS',
  },
  pool: { maxConnections: 10, maxIdleTime: 15 },
  language: 'en',
  dialectOptions: { multipleStatements: true },
});

const db = {};

const files = path.join(__dirname, './models');

const loadModels = (dir) => {
  fs
    .readdirSync(dir)
    .filter(file => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
    .forEach((file) => {
      const model = sequelize.import(path.join(dir, file));
      db[model.name] = model;
    });
};

loadModels(files);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
  .authenticate()
  .then(() => console.log('Successfully connected to database!'))
  .catch(err => console.log('Error connecting to database:', err));

db.sequelize.sync();

module.exports = db;
