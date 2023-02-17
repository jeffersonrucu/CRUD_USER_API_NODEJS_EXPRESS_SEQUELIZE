import { Sequelize } from "sequelize"
require('dotenv').config()

const databaseUrl = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DATABASE}` || '';
export const sequelize = new Sequelize(databaseUrl, {
    define: {
        underscored: true
    }
})
