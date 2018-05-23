const express = require('express')
const app = express()
const knex = require('./db/connection')

const bodyParser = require('body-parser')

const resolutions = require('./routes/resolution')

app.use(bodyParser.json())
app.use('/resolutions', resolutions)

app.listen(3000, () => console.log('App listening on port 3000'));
