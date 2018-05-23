const knex = require('./connection')

module.exports = {
    list() {
        return database("resolution").select();
    },
    read(id) {
        return database("resolution").select().where("id", id).first();
    },
    create(resolution) {
        return datatbase("resolution")
            .insert(resolution)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, resolution) {
        return database("resolution")
            .update(resolution)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    delete(id) {
        return database("resolution").delete().where("id", id);
    }
}

// function getAllBeers() {
//     return knex('ipas')
// }

// function getOneBeer(id) {
//     return knex('ipas')
//         .where('id', id)
// }

// function addOneBeer() {

// }

// function deleteOneBeer() {

// }

// function updateOneBeer(id, body) {
//     return knex('ipas')
//         .where('id', id)
//         .update(body)
//         .returning('*')
// }

// module.exports = {
//     getAllBeers,
//     getOneBeer,
//     addOneBeer,
//     deleteOneBeer,
//     updateOneBeer
// }