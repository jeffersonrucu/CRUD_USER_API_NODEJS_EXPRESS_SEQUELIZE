require('dotenv').config();

module.exports = {
    dialect: 'mysql',
    url: `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DATABASE}`
}
