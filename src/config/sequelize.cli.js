require('dotenv').config();

module.exports = {
    // dialect: 'mysql',
    // url: process.env.DATABASE_URL
    username: 'database_dev',
    password: 'database_dev',
    database: 'database_dev',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
}