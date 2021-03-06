// Update with your config settings.
require('dotenv').config()
module.exports = {

  development: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  },

  production: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING1,
    searchPath: ['knex', 'public'],
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  }

};