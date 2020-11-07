const Sequelize = require('sequelize');

const config = require('../config');
/*
  require models here
  const usesSchema = require('./user')
*/

const db = {};
const sequelize = new Sequelize(config);

const requireModel = (schema) => {
  const model = schema(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
};

/*
  Require Models

  requireModel(userSchema)

*/

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
