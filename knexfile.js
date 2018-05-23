module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/beers'
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
  }
}