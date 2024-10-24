// authentication-service/config/dbConfig.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres', // or 'mysql' if you're using MySQL
});

module.exports = sequelize;
