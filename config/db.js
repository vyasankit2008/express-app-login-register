const sequelize = require('./dbConfig');
const User = require('../entities/user');

const models = {
  User: User(sequelize),
};

module.exports = {
  sequelize,
  ...models,
};
