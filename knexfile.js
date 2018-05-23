module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/galvanize-memory1'
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + '?ssl=true'
  }
}