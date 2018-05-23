const express = require('express')
const bodyParser = require('body-parser')
const knex = ('./connection')
const app = express()


const resolutions = require('./routes/resolutions')

app.use(bodyParser.json())
app.use('/resolutions', resolutions)

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app