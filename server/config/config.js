// configurando o Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("sqlite:./index.sqlite");

module.exports = sequelize;
